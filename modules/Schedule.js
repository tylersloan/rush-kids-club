import React from 'react'
import Navigation from './Navigation'

class Schedule extends React.Component {
	render() {
		const location = this.props.params.location
		return (
			<div>
				<Navigation loc={location} />
				<h4>Full Kids Club at {location} Schedule</h4>
			</div>
		)
	}
}

export default Schedule