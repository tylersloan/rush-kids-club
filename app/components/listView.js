import React from 'react';



class ListView extends React.Component{
	render(){
		//items = [{
		//label: "mylabel",
		//text : "asdfasdf"}]
		const {items} = this.props;
		const listitems = items.map((i,index)=>{
			const {label,text} = i;
			return <li key={index}>
					    <span class="label">{label}</span>
					    <span class="open"></span> {text} <span id="close"></span>
					  </li>
		}) ;
		return <ul>{listitems}</ul>
	}
}

export default ListView;