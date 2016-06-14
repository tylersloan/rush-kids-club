import React from 'react';
import NavLink from './NavLink'
import Home from './Home'


class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Is Rush's Kids Club Open? <span class="icon-status" id="icon-status"></span></h1>
				{this.props.children}
			</div>
		)
	}
}

export default App