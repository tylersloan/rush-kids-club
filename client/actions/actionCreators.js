// incremenet like count
export function increment(index) { // index is this post
	return {
		type: 'INCREMENT_LIKES',
		index: index // could just have `index` <- es6
	}
}

// add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// remove comment
export function removeComment(postId, i) { // i === index ^^
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}