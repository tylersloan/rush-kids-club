import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import searchTerm from './searchTerm';

const rootReducer = combineReducers({searchTerm, routing: routerReducer});

export default rootReducer;