
import kcSchedule from '../utils/fixture.js';

export function clear_chunk(){
	return {
		type : 'CLEAR_CHUNK'
	}
}


export function get_chunk(query){
	let content = kcSchedule[query];
	return {
		type : 'GET_CHUNK',
		payload : {
			query,
			content
		}
	}
}



export function set_chunk(query){
	return dispatch=>{
		dispatch(clear_chunk());
		dispatch(get_chunk(query));
	};
}