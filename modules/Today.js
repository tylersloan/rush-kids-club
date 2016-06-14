import React from 'react'
import Navigation from './Navigation'
import NavLink from './NavLink'
import kcSchedule from '../schedule.js'
import h from '../helpers'

class Today extends React.Component {
	render() {
		const locationKeys = Object.keys(kcSchedule)
		const location = this.props.params.location

		if (locationKeys.includes(location)) {
			console.log(kcSchedule[location].schedule.sunday.shift)

			return (
				<div>
					<Navigation loc={location} />
					<h4>Today's Kids Club {h.titleCase(location)} Schedule</h4>
					<ul>
					  <li>
					    <span class="label">Morning:</span>
					    <span id="js-first-open"></span> - <span id="js-first-close"></span>
					  </li>
					  <li>
					    <span class="label">Afternoon:</span>
					    <span id="js-second-open"></span> - <span id="js-second-close"></span>
					  </li>
					</ul>

					<div class="kc-is-open">
					  <p>You have <span id="js-timeleft"></span> until Kids Club closes.</p>
					</div>

					<div class="kc-is-closed">
					  <p>Kids Club is closed right now but will open again <span class="bold" id="js-next-open"></span></p>
					</div>
				</div>
			)
		} else {
			return (
				<div>This location does not exist. <NavLink to="/">Please search again.</NavLink></div>
			)
		}
	}
}

export default Today