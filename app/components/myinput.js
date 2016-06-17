import React from 'react';


/**
 * You can pass validator functions from parents to this input
 * You can also pass valid inputs as an array as props to this input to manage the state
 * For example : If the text entered does not match the valid inputs  you can set your error state to true and handle it from there using
 * onChange method of the input Element
 *
 * However, the thumb rule of Components is to ensure that they can be reused everywhere.
 * A component which has the reference of the parent and uses that reference to access the parent's functions is not reusable
 * So always ensure that the component takes props which are Generic
 */

export default class MyInput extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			error : false
		}
	}
	handleChange() {
		const val = this.refs.my_input.value.toLowerCase();
		if(val.length) {
			if(this.state.error) {
				this.setState({error:false});
			}
		} else {
			this.setState({error: true});
			console.log('err');
		}
	}
	submit(e) {
		e.preventDefault();
		const {handleSubmit} = this.props;
		const val = this.refs.my_input.value.toLowerCase();
		if(!this.state.error) {
			handleSubmit(val);
		} else {
			console.log('err');
		}
	}
	render() {
		const {error} = this.state;
		const error_ui = error ? <div class="err">There was an error</div> : <span/>
		 return (
			<div>
				{error_ui}
				<h4>Enter a location:</h4>
				<form onSubmit={(...args)=>this.submit(...args)}>
					<input onChange={()=>this.handleChange()} id="js-location-input" type="text" ref="my_input" />
					<button type="submit" >Go</button>
				</form>
			</div>
		)
	}
}