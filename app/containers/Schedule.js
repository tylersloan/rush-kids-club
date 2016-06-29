import React from 'react';
import Navigation from './Navigation';
import NavLink from './NavLink';
import h from '../utils/index';
import {connect} from 'react-redux';
import {set_chunk, clear_chunk} from '../actions/index';

class TableRow extends React.Component {
	render() {
		const {hours} = this.props; // THE DATA!
		return (
			<div>{JSON.stringify(hours)}</div>
		)
	}
}

class Schedule extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		const {dispatch} = this.props;
		const location = this.props.params.location;
		dispatch(set_chunk(location));
		// console.log('mounting')
	}
	componentWillReceiveProps(newProps) {
		const {dispatch} = this.props;
		const new_location = newProps.params.location;
		if(new_location !== this.props.params.location) {
			dispatch(set_chunk(new_location));
			// console.log('recieveprops');
		}
	}
	componentWillUnmount() {
		const {dispatch} = this.props;
		dispatch(clear_chunk());
	}
	renderHours(key) {
		return (
			<TableRow key={key} index={key} hours={hours} />
		)
	}
	render() {
		const hours = this.props.app_reducer.content; // THE DATA!
		const location = this.props.params.location;
		let message = <h4>Kids Club Schedule at Gold's Gym {h.titleCase(location)}</h4>

		if (true) {
			message = (
				<div>
				 	<Navigation loc={location} />
					<h4>Kids Club Schedule at Gold's Gym {h.titleCase(location)}</h4>
					<ul>
						{hours.map(this.renderHours)}
					</ul>
				</div>
			)
		} else {
			message = <div>This location does not exist. <NavLink to="/">Please search again.</NavLink></div>;
		}

		return message;
	}
}

function select(state) {
	return state;
}

export default connect(select)(Schedule);

