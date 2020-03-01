import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/index';
import { GlobalStyle } from '../components/style/header';
import AppLayout from '../components/AppLayout';
import rootSaga from '../sagas/index';


const withoutAppLayout = [
  'Register',
  'Login',
];

const Main = ({ Component, store }) =>
// console.dir(Component);
// console.log(Component.name);


  (
    <>
      <Provider store={store}>
        <Head>
          <link rel="stylesheet" href="/style/reset.css" />
        </Head>
        <GlobalStyle />
        {withoutAppLayout.includes(Component.name) ? <Component />
          : (
            <AppLayout>
              <Component />
            </AppLayout>
          )}
      </Provider>
    </>
  );
Main.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-unused-vars
export default withRedux((initialState, options) => {
  // eslint-disable-next-line no-console
  console.log('withRedux()...');

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(...middleware),
  ));
  sagaMiddleware.run(rootSaga);

  return store;
})(Main);
