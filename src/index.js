import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './scenes/App';
import * as serviceWorker from './serviceWorker';
import {getStore, initAppState} from "./store";
import {Provider} from 'react-redux';


initAppState();


ReactDOM.render(
  <Provider store={getStore()}>
    <App/>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
