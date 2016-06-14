// import react, itself
import React from 'react'
// import render method only from react-dom
import { render } from 'react-dom'
// import router, route, browserHistory, and indexroute methods from react-router
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import custom modules
import App from './modules/App'
import Schedule from './modules/Schedule'
import Today from './modules/Today'
import Navigation from './modules/Navigation'
import Home from './modules/Home'

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/" component={Navigation}></Route>
			<Route path="/schedule/:location" component={Schedule}></Route>
			<Route path="/today/:location" component={Today}></Route>
		</Route>
	</Router>
), document.getElementById('app'))