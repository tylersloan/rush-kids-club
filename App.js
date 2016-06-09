import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentHour:   new Date().getHours(),
			currentMinute: new Date().getMinutes(),
			currentSecond: new Date().getSeconds()
		}
	}
	render() {
		console.log(this.state.currentSecond)
		return (
			<h1>{this.state.currentHour}:{this.state.currentMinute}:{this.state.currentSecond}</h1>
		)
	}
}

export default App