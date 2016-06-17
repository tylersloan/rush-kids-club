import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import DevTools from './DevTools';

import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store/index';
const store = configureStore();

// import components
import App from './App';
import Home from './Home';
import Today from './Today';
import Schedule from './Schedule';

const history = syncHistoryWithStore(browserHistory, store);

export default class Root extends React.Component{
	render() {
		return (
			<Provider store={store}>
				<div>
					<Router history={history}>
						<Route path="/" component={App}>
							<IndexRoute component={Home}/>
							<Route path="/schedule/:location" component={Schedule}></Route>
							<Route path="/today/:location" component={Today}></Route>
						</Route>
					</Router>
					<DevTools/>
				</div>
			</Provider>
		)
	}
}