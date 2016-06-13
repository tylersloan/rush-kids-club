import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Schedule from './modules/Schedule'
import Today from './modules/Today'
import Location from './modules/Location'

render((
	<Router history={hashHistory}>
		<Route component={App}>
			<Route path="/" component={Location}></Route>
			<Route path="/schedule" component={Schedule}></Route>
			<Route path="/today" component={Today}></Route>
		</Route>
	</Router>
), document.getElementById('app'))