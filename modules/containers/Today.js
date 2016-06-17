import React from 'react'
import Navigation from './Navigation'
import NavLink from './NavLink'
import h from '../utils/index'
import {connect} from 'react-redux';
import ListView from '../components/listView';
import {set_chunk, clear_chunk} from '../actions/index';

/**
 * I have this dumb component within the same file as the container because this is a tightly bound child
 * Not reusable.
 */
class TodayRow extends React.Component{


	render(){
		const {location} = this.props;
		const listViewItems = [{
			label : "Morning",
			text : "-"
		},{
			label : "Evening",
			text : "-"
		}];
		return <div> 
					<h4>Today's Kids Club <u>{h.titleCase(location)}</u> Schedule</h4>
						
						<ListView items={listViewItems} />

						<div class="kc-is-open">
						  <p>You have <span id="js-timeleft"></span> until Kids Club closes.</p>
						</div>

						<div class="kc-is-closed">
						  <p>Kids Club is closed right now but will open again <span class="bold" id="js-next-open"></span></p>
						</div>
				 </div>
	}
}




class Today extends React.Component {


	constructor(props){
		super(props);
		
	}
	componentWillMount(){
		const {dispatch} = this.props;
		const location = this.props.params.location;
		dispatch(set_chunk(location));
		console.log('mounting')
	}

	
	componentWillReceiveProps(newProps){
		const {dispatch} = this.props;
		const new_location = newProps.params.location;
		if(new_location !== this.props.params.location){
			dispatch(set_chunk(new_location));
			console.log('recieveprops');
		}
	}
		

	componentWillUnmount(){
		const {dispatch} = this.props;
		dispatch(clear_chunk());
	}


	render() {

		const {content} = this.props.app_reducer;
		
		const location = this.props.params.location;
		
		if(typeof content === 'undefined'){
			return (
				<div>This location does not exist. <NavLink to="/">Please search again.</NavLink></div>
			)
		}

		//<ListView items={[{label:'',text:""}...]} />
		// Wrap your listview to enhance it.

		return (
			<div>
				<Navigation loc={location} />
				<TodayRow location={location}/>
			</div>
		)
	
	}
}

function select(state){
	return state;
}

export default connect(select)(Today);

