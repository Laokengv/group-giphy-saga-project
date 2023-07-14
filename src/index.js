import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga.js";
const sagaMiddleware = createSagaMiddleware();

  
  function favoriteList(state = [], action) {
    if (action.type === 'ADD_FAVORITE') {
      return [...state, action.payload]
    
    }
    return state;
  }
const store = createStore (
    combineReducers({favoriteList}),
    applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>
);
