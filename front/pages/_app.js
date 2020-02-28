import React from 'react';
import Head from 'next/head'
import AppLayout from "../components/AppLayout";
import {GlobalStyle} from '../components/style/header'
import PropTypes from 'prop-types';
import Link from "next/link";

const withoutAppLayout = [
    'Register',
    'Login',
];

const Main = ( { Component } ) => {
    // console.dir(Component);
    // console.log(Component.name);

    return (
      <>
          <Head>
              <link rel="stylesheet" href="/style/reset.css"/>
          </Head>
          <GlobalStyle/>
          {withoutAppLayout.includes(Component.name) ? <Component/> :
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