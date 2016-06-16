import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import rootReducer
import rootReducer from './reducers/index.js';

import hours from './data/hours';

//create obj for default data
const defaultState = {
	location
}

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store)
export default store;