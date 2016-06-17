import React from 'react';
import Navigation from './Navigation';
import NavLink from './NavLink';
import h from '../utils/index';
import {connect} from 'react-redux';
import {set_chunk, clear_chunk} from '../actions/index';

class TableRow extends React.Component {
	render() {
		const {location} = this.props;
		const hours = this.props.app_reducer.content; // THE DATA!
		return (
			<pre>{JSON.stringify(hours)}</pre>
		)
	}
}

class Schedule extends React.Component {
	componentWillMount(){
		const {dispatch} = this.props;
		const location = this.props.params.location;
		dispatch(set_chunk(location));
	}
	render() {
		const {content} = this.props.app_reducer;
		const location = this.props.params.location;
		let message = <h4>Kids Club Schedule at Gold's Gym {h.titleCase(location)}</h4>;

		if (true) {
			message = (
				<div>
				 	<Navigation loc={location} />
					<h4>Kids Club Schedule at Gold's Gym {h.titleCase(location)}</h4>
					<TableRow {...this.props} location={location} />
				</div>
			)
		} else {
			message = <div>This location does not exist. <NavLink to="/">Please search again.</NavLink></div>;
		}

		return message;
	}
}

function select(state){
	return state;
}

export default connect(select)(Schedule);

