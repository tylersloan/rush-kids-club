import { combineReducers } from 'redux';

import { routerReducer, LOCATION_CHANGE } from 'react-router-redux';


const initialState = { content : {} };

export default function app_reducer(state={initialState},action){
	// console.log("app_reducer")
	switch(action.type){
		case 'CLEAR_CHUNK':
			// console.log("initialState: ", initialState)
			return Object.assign({},initialState);
		case 'GET_CHUNK':
		    var {content} = action.payload;
		    // console.log("action: ", action)
		    return Object.assign({},state.content,{
		    	content
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