import React from 'react';
import { Link } from 'react-router'


class App extends React.Component {
	render() {
		return (
			<div>
				<h1>
				    Is Rush's Kids Club Open? <span class="icon-status" id="icon-status"></span>
				</h1>
				<ul>
					<li>
						<Link to="/">Location</Link>
					</li>
					<li>
						<Link to="/today">Today's Schedule</Link>
					</li>
					<li>
						<Link to="/schedule">Full Schedule</Link>
					</li>
				</ul>

				{this.props.children}
			</div>
		)
	}
}

export default App