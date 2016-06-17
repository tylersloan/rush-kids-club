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
		// e.preventDefault()
		// const enteredLocation = e.target.elements[0].value.toLowerCase()
		const path = `/today/${value}`;
		// use this context to push path to the router
		const {dispatch} = this.props;
		browserHistory.push(path);
		
	},
	handleSubmit(){

	},
	render() {
		return <MyInput handleSubmit={(...args)=>this.go(...args)} />
	}
}));