import React from 'react';

const Home = React.createClass({
	render() {
		return (
			<div>
				<h4>Enter a location:</h4>
				<form onSubmit={this.go}>
					<input id="js-location-input" type="text"/>
					<button type="submit">Go</button>
				</form>
			</div>
		);
	}
});

export default Home;