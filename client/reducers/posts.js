// A reducer takes 2 things:
// 1. the action (info on what happened)
// 2. a copy of current state

// every reducer runs inside every action. up to you what happens

function posts(state = [], action) {
	console.log('the post will change')
	console.log(state, action);
	return state;
}

export default posts;