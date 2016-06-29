import React from 'react';
import {connect} from 'react-redux';

import styles from '../../styles/styles.css';

class App extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="app">
				<header>
					<h1>Is Gold's Kids Club Open? <span class="icon-status" id="icon-status"></span></h1>
				</header>
				{this.props.children}
			</div>
		)
	}
}

function select(state) {
	return state;
};

export default connect(select)(App);