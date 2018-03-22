import React from 'react';

import { StatusBar } from 'react-native';
import { Notify, Dialog, View } from './components';
import Navigation from './configs/Navigation';

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux';
//redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const app = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent" />

      <Navigation />

      <Notify />
      <Dialog />
    </View >
  </Provider >
);

sagaMiddleware.run(rootSaga);

export default app

