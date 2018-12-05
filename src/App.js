import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import CreateStore, { sagaMiddleware, RootSaga } from './Configs/CreateStore';
import Navigation from './Configs/Navigation'

import { Notify, Dialog, View } from './Components';

YellowBox.ignoreWarnings(['unknown call: "relay:check"']);

const app = () => (
  <Provider store={CreateStore}>
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

sagaMiddleware.run(RootSaga)

export default app

