import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component{
	constructor(props){
		super(props);
	}

	
	render(){
		return <div className="app">
				{this.props.children}
			</div>
	}
	
}


function select(state){
	return state;
};

export default connect(select)(App);