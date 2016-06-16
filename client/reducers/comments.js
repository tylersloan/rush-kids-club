// A reducer takes 2 things:
// 1. the action (info on what happened)
// 2. a copy of current state

function comments(state = [], action) {
	console.log(state, action);
	return state;
}

export default comments;