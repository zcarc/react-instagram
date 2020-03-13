import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from 'axios';

import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from "next-redux-saga";

import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/index';
import {GlobalStyle} from '../components/style/header';
import AppLayout from '../components/AppLayout';
import rootSaga from '../sagas/index';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {USER_EXISTS_REQUEST} from "../reducers/user";

const Main = ({Component, store, pageProps}) => {
    // console.dir(Component);
    // console.log('Component.name: ', Component.name);
    // console.log('Main... pageProps: ', pageProps);

    return (
        <>
            <Provider store={store}>
                <Head>
                    <link rel="stylesheet" href="/style/reset.css"/>
                </Head>
                <GlobalStyle/>
                <AppLayout>
                    <Component {...pageProps} pageName={Component.name} />
                </AppLayout>
            </Provider>
        </>
    );
};

Main.propTypes = {
    Component: PropTypes.elementType.isRequired,
    store: PropTypes.object.isRequired,
    pageProps: PropTypes.object,
};

Main.getInitialProps = async (context) => {
    // console.log('_app... context: ', context);
    // console.log('_app... context.ctx: ', context.ctx);
    // console.log('_app... context.Component: ', context.Component);
    // console.log('_app... JSON.stringify(context.Component): ', JSON.stringify(context.Component));

    // const { Component, ctx } = context;

    console.log('Object.keys(context): ', Object.keys(context));
    console.log('Object.keys(context.ctx): ', Object.keys(context.ctx));
    console.log('context.ctx.isServer: ', context.ctx.isServer);

    const cookie = context.ctx.req ? context.ctx.req.headers.cookie : '';
    console.log('cookie: ', cookie);

    if(context.ctx.isServer && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }

    let pageProps = null;
    const state = context.ctx.store.getState();

    if(!state.user.isLoggedIn) {
        context.ctx.store.dispatch({
            type: USER_EXISTS_REQUEST,
        });
    }

    if(context.Component.getInitialProps) {
        pageProps = await context.Component.getInitialProps(context.ctx);
        // console.log('_app.js pageProps: ', pageProps);
    }




    return { pageProps };
};

// eslint-disable-next-line no-unused-vars
const configureStore = ((initialState, options) => {
    // eslint-disable-next-line no-console
    // console.log('withRedux()...');

    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];

    const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, initialState, composeEnhancers(
        applyMiddleware(...middleware),
    ));

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
});

export default withRedux(configureStore)(withReduxSaga(Main));
