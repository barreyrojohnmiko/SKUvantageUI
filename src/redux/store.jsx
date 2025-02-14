import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';

import appReducers from './App/reducers';

const rootReducer = combineReducers({ appReducers });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
