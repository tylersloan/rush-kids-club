import React from 'react'

class Today extends React.Component {
	render() {
		return (
			<div>
				<h4>Today's Kids Club Schedule</h4>
				<ul class="js-schedule">
				  <li class="js-morning-schedule">
				    <span class="label">Morning:</span>
				    <span id="js-first-open"></span> - <span id="js-first-close"></span>
				  </li>
				  <li class="js-afternoon-schedule">
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
	}
}

export default Today