import React from 'react';


export default class MyInput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			error : false
		}
	}
	
	handleChange(){
		const val = this.refs.my_input.value;
		if(val.length){
			if(this.state.error){
				this.setState({error:false});	
			}	
		}else{
			this.setState({error: true});
			console.log('err');
		}
	}

	submit(e){
		e.preventDefault();
		const {handleSubmit} = this.props;
		const val = this.refs.my_input.value;
		if(!this.state.error){
			handleSubmit(val);
		}else{
			console.log('err');
		}
	}

	render(){

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