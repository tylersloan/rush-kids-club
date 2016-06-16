import React from 'react';

const Week = React.createClass({
	render() {
		let content = <div>This location does not exist. Please search again.</div>
		if (false) {
			content = <div>
									<h4>Kids Club Schedule at Gold's Gym <code>{`location`}</code></h4>
								</div>
		}
		return content;
	}
});

export default Week;
