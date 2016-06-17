import React from 'react';
import NavLink from './NavLink'
import {connect} from 'react-redux';
import MyInput from '../components/myinput';
import { Link, browserHistory } from 'react-router'


function select(state){
	return state;
}

export default connect(select)(React.createClass ({
	go(value) {
		const path = `/today/${value}`;
		const {dispatch} = this.props;
		browserHistory.push(path);
	},
	handleSubmit() {
	},
	render() {
		return <MyInput handleSubmit={(...args)=>this.go(...args)} />
	}
}));