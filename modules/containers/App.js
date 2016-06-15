import React from 'react';
import {connect} from 'react-redux';
import {set_data} from '../actions/index';

class App extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		const {dispatch} = this.props;
		dispatch(set_data());
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