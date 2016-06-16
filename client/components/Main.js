import React from 'react';

const Main = React.createClass({
	render() {
		return (
			<div>
				<header>
					<h1>Is Gold's Kids Club Open? <span class="icon-status" id="icon-status"></span></h1>
				</header>
				<main>
					{React.cloneElement(this.props.children, this.props)}
				</main>
			</div>
		);
	}
});

export default Main;