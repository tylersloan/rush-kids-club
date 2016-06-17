import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import components
import Main from './components/Main';
import Home from './components/Home';
import Week from './components/Week';
import Navigation from './components/Navigation';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="/week/:searchTermId" component={Week}></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));