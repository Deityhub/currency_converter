import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

import MyStack from './config/routes';

// TODO: render different screens based on app interaction
export default () => (
  <Provider store={store}>
    <MyStack />
  </Provider>
);
