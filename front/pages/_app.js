import React from 'react';
import Head from 'next/head'
import AppLayout from "../components/AppLayout";
import {GlobalStyle} from '../components/style/header'
import PropTypes from 'prop-types';

const Main = ( { Component } ) => {
    // console.dir(Component);
    // console.log(Component.name);

    return (
      <>
          <Head>
              <link rel="stylesheet" href="/style/reset.css"/>
          </Head>
          <GlobalStyle/>
          {Component.name === 'Register' ? <Component/> :
              <AppLayout>
                  <Component/>
              </AppLayout>
          }

      </>
    );
};

Main.propTypes = {
    Component: PropTypes.elementType,
};

export default Main;