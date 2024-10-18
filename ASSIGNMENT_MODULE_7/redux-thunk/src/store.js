// store.js
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer'; // adjust the import based on your file structure

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
