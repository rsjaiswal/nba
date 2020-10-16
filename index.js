import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise';

import rootReducer from './app/store/reducers/index';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const createStoreWithMiddleware = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware)),
);

const AppRedux = () => {
  return (
    <Provider store={createStoreWithMiddleware}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppRedux);
