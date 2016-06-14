import React from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink'

class Location extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
					</li>
					<li>
						<NavLink to="/today">Today's Schedule</NavLink>
					</li>
					<li>
						<NavLink to="/schedule">Full Schedule</NavLink>
					</li>
				</ul>
			</div>
		)
	}
}

export default Location