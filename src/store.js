import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from "./services/redux-middlewares/logger";
import rootReducer from "./scenes/App/services/rootReducer";


let store;
export const initAppState = () => {
  let middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
  }

  store = createStore(rootReducer, applyMiddleware.apply(this, middlewares));
};

export const getStore = () => {
  return store;
};

