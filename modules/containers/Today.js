import React from 'react'
import Navigation from './Navigation'
import NavLink from './NavLink'
import h from '../utils/index'
import {connect} from 'react-redux';
import ListView from '../components/listView';

class Today extends React.Component {




	render() {
		const {content} = this.props.app_reducer;
		const locationKeys = Object.keys(content)
		const location = this.props.params.location;
		if(!Object.keys(content).length){
			return <div> Loading</div>;
		}
		if (locationKeys.includes(location)) {
			console.log(content[location].schedule.sunday.shift)

			//<ListView items={[{label:'',text:""}...]} />
			// Wrap your listview to enhance it.

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

function select(state){
	return state;
}

export default connect(select)(Today);

