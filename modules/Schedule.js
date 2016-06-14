import React from 'react'

class Schedule extends React.Component {
	render() {
		return (
			<div>
				<h4>Full Kids Club at {this.props.params.location} Schedule</h4>
			</div>
		)
	}
}

export default Schedule