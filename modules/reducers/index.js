import { combineReducers } from 'redux';

import { routerReducer, LOCATION_CHANGE } from 'react-router-redux';

export default function app_reducer(state={content : {}},action){
	switch(action.type){
		case 'MY_ACTION':
			return Object.assign({},state,{
				content : action.payload.content
			});

		default :
			return state;
	}
	return state;
}

const rootReducer = combineReducers({
    app_reducer,
    routing: routerReducer,
});

export default rootReducer;