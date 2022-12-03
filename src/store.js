import {createStore, combineReducers, applyMiddleware} from 'redux';
import counterReducer from './reducers.js/counterReducer';
import todoReducer from './reducers.js/todoReducer';
import logger from 'redux-logger'

import thunk from 'redux-thunk'

const reducers = combineReducers({
  countData: counterReducer,  //{count: 0,}
  todoData: todoReducer       //{ todos:[]}
})

const store = createStore(reducers, applyMiddleware(thunk));
export default store;