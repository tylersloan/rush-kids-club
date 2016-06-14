import React from 'react';
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
	getInitialState() {
		return {
			userLocation: ''
		}
	},
	render() {
		return (
			<div>
				<h1>Is Gold's Kids Club Open? <span class="icon-status" id="icon-status"></span></h1>
				{this.props.children}
			</div>
		)
	}
})