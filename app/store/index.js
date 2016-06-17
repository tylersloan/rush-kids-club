import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {hashHistory} from 'react-router';
import rootReducer from '../reducers/index';
const middleware = [thunkMiddleware, routerMiddleware(hashHistory)];
import DevTools from '../containers/DevTools';

export default function configureStore(initialState={}) {
	 const store = createStore( rootReducer , compose(applyMiddleware(...middleware), DevTools.instrument()));
	 return store;
}