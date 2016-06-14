import React from 'react';
import { Link } from 'react-router'
import NavLink from './NavLink'


class App extends React.Component {
	render() {
		return (
			<div>
				<h1>
				    Is Rush's Kids Club Open? <span class="icon-status" id="icon-status"></span>
				</h1>
				<ul>
					<li>
						<NavLink to="/">Location</NavLink>
					</li>
					<li>
						<NavLink to="/today">Today's Schedule</NavLink>
					</li>
					<li>
						<NavLink to="/schedule">Full Schedule</NavLink>
					</li>
				</ul>

				{this.props.children}
			</div>
		)
	}
}

export default App