import React from 'react'
import Navigation from './Navigation'
import NavLink from './NavLink'
import kcSchedule from '../schedule.js'
import h from '../helpers'

class Schedule extends React.Component {
	render() {
		const locationKeys = Object.keys(kcSchedule)
		const location = this.props.params.location

		if (locationKeys.includes(location)) {
				console.log(this.props.children)
			return (
				<div>
					<Navigation loc={location} />
					<h4>Kids Club Schedule at Gold's Gym {h.titleCase(location)}</h4>
					{this.props.children}
				</div>
			)
		} else {
			return (
				<div>This location does not exist. <NavLink to="/">Please search again.</NavLink></div>
			)
		}
	}
}

export default Schedule