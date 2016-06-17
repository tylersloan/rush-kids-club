import React from 'react';
import Navigation from './Navigation';
import NavLink from './NavLink';
import h from '../utils/index';
import {connect} from 'react-redux';

class Schedule extends React.Component {
	componentDidMount(){
		//dispatch(get_chunk(value));
	}
	render() {
		const {content} = this.props.app_reducer;

		const locationKeys = Object.keys(content);
		const location = this.props.params.location;

		if (content.schedule) {
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

function select(state){
	return state;
}

export default connect(select)(Schedule);

