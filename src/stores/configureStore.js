import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducer from '../reducers/index.js';
import initialState from '../reducers/initial-state.js';
import thunk from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(combineReducers({app: reducer, router: routerReducer}), initialState, applyMiddleware(thunk, middleware));

export default store;