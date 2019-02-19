import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './scenes/App';
import * as serviceWorker from './serviceWorker';
import {getStore, initAppState} from "./store";
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'


initAppState();


ReactDOM.render(
  <Provider store={getStore()}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));

serviceWorker.unregister();
