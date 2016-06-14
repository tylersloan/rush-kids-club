import React from 'react';
import NavLink from './NavLink'


// class Home extends React.Component {
export default React.createClass ({
	// get context in this component
	contextTypes: {
		router: React.PropTypes.object
	},
	go(e) {
		e.preventDefault()
		const enteredLocation = e.target.elements[0].value
		// this.setState({
		// 	userLocation : enteredLocation
		// });

		const path = `/today/${enteredLocation}`
		// use this context to push path to the router
		this.context.router.push(path)

		// console.log(this.state.userLocation)
	},
	render() {
		return (
			<div>
				<h4>Enter a location:</h4>
				<form onSubmit={this.go}>
					<input id="js-location-input" type="text"/>
					<button type="submit">Go</button>
				</form>
			</div>
		)
	}
})

// export default Home