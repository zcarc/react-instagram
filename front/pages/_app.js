import React from 'react';
import Head from 'next/head'
import AppLayout from "../components/AppLayout";
import {GlobalStyle} from '../components/style/header'
import PropTypes from 'prop-types';

import reducer from '../reducers/index'
import {createStore} from "redux";
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';


const withoutAppLayout = [
    'Register',
    'Login',
];

const Main = ({Component, store}) => {
    // console.dir(Component);
    // console.log(Component.name);


    return (
        <>
            <Provider store={store}>
                <Head>
                    <link rel="stylesheet" href="/style/reset.css"/>
                </Head>
                <GlobalStyle/>
                {withoutAppLayout.includes(Component.name) ? <Component/> :
                    <AppLayout>
                        <Component/>
                    </AppLayout>
                }
            </Provider>
        </>
    );
};

Main.propTypes = {
    Component: PropTypes.elementType,
};

export default withRedux((initialState, options) => {
    console.log('withRedux()...');

    return createStore(reducer, initialState);
})(Main);
