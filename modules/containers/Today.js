import React from 'react'
import Navigation from './Navigation'
import NavLink from './NavLink'
import h from '../utils/index'
import {connect} from 'react-redux';
import ListView from '../components/listView';
import {set_chunk, clear_chunk} from '../actions/index';

/**
 * I have this dumb component within the same file as the container because this is a tightly bound child
 * Not reusable.
 */
class TodayRow extends React.Component{
	render() {
		const {location} = this.props;
		const hours = this.props.app_reducer.content; // THE DATA!
		const listViewItems = [{
			label : "Morning",
			text : "-"
		},{
			label : "Evening",
			text : "-"
		}];
		return (
			<div>
				<h4>Today's Kids Club {h.titleCase(location)} Schedule</h4>
				<ListView items={listViewItems} />
				{/*<div className="kc-is-open">
				  <p>You have <span className="bold">&times;&times; minutes</span> until Kids Club closes.</p>
				</div>
				<div className="kc-is-closed">
				  <p>Kids Club is closed right now but will open again <span className="bold">&times;&times; minutes</span></p>
				</div>*/}
			</div>
		)
	}
}

class Today extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		const {dispatch} = this.props;
		const location = this.props.params.location;
		dispatch(set_chunk(location));
		console.log('mounting')
	}
	componentWillReceiveProps(newProps) {
		const {dispatch} = this.props;
		const new_location = newProps.params.location;
		if(new_location !== this.props.params.location) {
			dispatch(set_chunk(new_location));
			console.log('recieveprops');
		}
	}
	componentWillUnmount() {
		const {dispatch} = this.props;
		dispatch(clear_chunk());
	}
	render() {
		const {content} = this.props.app_reducer;
		const location = this.props.params.location;
		let message = "Loading...";
		/**
		 * TODO
		 * Fix the Flash. Why is this 'undefined' for any amount of time? What's happening?
		 */
		if(typeof content === 'undefined') {
			message = <div>This location does not exist. <NavLink to="/">Please search again.</NavLink></div>;
		} else {
			//<ListView items={[{label:'',text:""}...]} />
			// Wrap your listview to enhance it.
			message = <div>
									<Navigation loc={location} />
									<TodayRow {...this.props} location={location}/>
								</div>
		}

		return message;
	}
}

function select(state) {
	return state;
}

export default connect(select)(Today);

