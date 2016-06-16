import React from 'react';
import { render } from 'react-dom';

const App = React.createClass({
	render() {
		return (
			<h1>hello</h1>
		)
	}
});

render(<App />, document.getElementById('root'));