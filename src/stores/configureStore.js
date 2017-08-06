import {createStore} from 'redux';
import reducer from '../reducers/index.js';
import initialState from '../reducers/initial-state.js';

const store = createStore(reducer, initialState);

export default store;