import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import components
import Main from './components/Main';
import Home from './components/Home';
import Week from './components/Week';
import Navigation from './components/Navigation';

const App = React.createClass({
	render() {
		return (
			<h1>hello</h1>
		)
	}
});

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="/week/:locationId" component={Week}></Route>
		</Route>
	</Router>
)

render(router, document.getElementById('root'));