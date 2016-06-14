import React from 'react'
import Location from './Location'

class Schedule extends React.Component {
	render() {
		return (
			<div>
				<Location />
				<h4>Full Kids Club at {this.props.params.location} Schedule</h4>
			</div>
		)
	}
}

export default Schedule