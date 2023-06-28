import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator.js';
import store from './src/store/configureStore.js';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
