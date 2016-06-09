var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
			<header className="wrapper">
				<h1>
				    Is Rush's Kids Club Open? <span class="icon-status" id="icon-status"></span>
				</h1>

				<nav>
					<ul>
						<li>
							<a href="./">Live</a>
						</li>
						<li>
							<a href="./schedule">Schedule</a>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
});

module.exports = Header;