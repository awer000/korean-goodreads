import React from 'react';
import AppLayout from '../components/Layout';
import Head from 'next/head';
import { NextPage } from 'next';
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/index';
import './_app.scss';
import rootSaga from '../sagas';

interface ComponentProps {
  Component: NextPage;
  store: any;
}
const Goodreads = ({ Component, store }: ComponentProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>nodebird2</title>
        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

export default withRedux((initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer && (window as any).__REDUX_DEVTOOLS_EXTENSION__
            ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
            : (f: any) => f,
        );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
})(Goodreads);
