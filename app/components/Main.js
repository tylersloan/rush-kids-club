var React = require('react');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<header>header</header>
				<main className="main">
					{this.props.children}
				</main>
			</div>
		)
	}
})

module.exports = Main;