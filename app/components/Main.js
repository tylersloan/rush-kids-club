var React = require('react');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}

	// loadSchedule: function() {
	//   this.setState({
	//     schedule: require('../../public/js/schedule')
	//   });
	// }
})

module.exports = Main;