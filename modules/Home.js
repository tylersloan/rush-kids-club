import React from 'react';
import NavLink from './NavLink'


// class Home extends React.Component {
export default React.createClass ({
	contextTypes: {
		router: React.PropTypes.object
	},
	go(e) {
		e.preventDefault()
		const userLocation = e.target.elements[0].value
		console.log(userLocation)
	},
	render() {
		return (
			<div>
				<h4>Enter a location:</h4>
				<form onSubmit={this.go}>
					<input id="js-location-input" type="text"/>
					<button type="submit">Go</button>
				</form>
				<br/>
				<br/>
				<hr/>
				<br/>
				<ul>
					<li>
						<NavLink to="/schedule/29609">29609 Schedule</NavLink>
					</li>
					<li>
						<NavLink to="/schedule/cherrydale">Cherrydale Schedule</NavLink>
					</li>
				</ul>
				<ul>
					<li>
						<NavLink to="/today/29609">29609 Schedule Today</NavLink>
					</li>
					<li>
						<NavLink to="/today/cherrydale">Cherrydale Schedule Today</NavLink>
					</li>
				</ul>
			</div>
		)
	}
})

// export default Home