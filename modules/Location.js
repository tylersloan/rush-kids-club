import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

class Location extends React.Component {
	render() {
		return (
			<div>
				<h4>Enter a location:</h4>
				<input id="js-location-input" type="text"/>
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
}

export default Location