import { combineReducers } from 'redux';

import { routerReducer, LOCATION_CHANGE } from 'react-router-redux';


const initialState = { hours : {} };

export default function app_reducer(state={initialState},action){
	switch(action.type){
		case 'CLEAR_CHUNK':
			return Object.assign({},initialState);
		case 'GET_CHUNK':
		    var {hours} = action.payload;

		    return Object.assign({},state.hours,{
		    	hours
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