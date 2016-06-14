import React from 'react'
import Navigation from './Navigation'

class Schedule extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				<h4>Full Kids Club at {this.props.params.location} Schedule</h4>
			</div>
		)
	}
}

export default Schedule