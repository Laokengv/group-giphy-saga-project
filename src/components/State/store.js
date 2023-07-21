import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './root-saga';
import favoriteListReducer from './Reducers/favoriteReducer';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ 
    favorites: favoriteListReducer
}),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);
export default store;
