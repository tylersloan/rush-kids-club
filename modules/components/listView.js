import React from 'react';



export class ListView extends React.Component{
	render(){
		//items = [{
		//label: "mylabel",
		//text : "asdfasdf"}]
		const listitems = items.map((i,index)=>{
			const {label,text} = i;
			return <li>
					    <span class="label">{label}</span>
					    <span id="js-first-open"></span> {text} <span id="js-first-close"></span>
					  </li>
		}) ;
		return <ul>{listitems}</ul>
	}
}