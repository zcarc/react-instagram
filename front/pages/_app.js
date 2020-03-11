import React, {useEffect} from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import {createStore, compose, applyMiddleware} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';
import withRedux from 'next-redux-wrapper';

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
    pageProps: PropTypes.object.isRequired,
};

Main.getInitialProps = async (context) => {
    // console.log('_app... context: ', context);
    // console.log('_app... context.ctx: ', context.ctx);
    // console.log('_app... context.Component: ', context.Component);
    // console.log('_app... JSON.stringify(context.Component): ', JSON.stringify(context.Component));

    // const { Component, ctx } = context;

    let pageProps = null;

    if(context.Component.getInitialProps) {
        pageProps = await context.Component.getInitialProps(context.ctx);
        // console.log('_app.js pageProps: ', pageProps);
    }
    return { pageProps };
};

// eslint-disable-next-line no-unused-vars
export default withRedux((initialState, options) => {
    // eslint-disable-next-line no-console
    // console.log('withRedux()...');

    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];

    const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, initialState, composeEnhancers(
        applyMiddleware(...middleware),
    ));
    sagaMiddleware.run(rootSaga);

    return store;
})(Main);
