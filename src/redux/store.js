/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import reducer from '@/redux/root/reducer';
import sagas from '@/redux/root/saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(reducer, {}, composedEnhancers);

sagas.map(sagaMiddleware.run);

export default store;
