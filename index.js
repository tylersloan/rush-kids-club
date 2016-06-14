// import react, itself
import React from 'react'
// import render method only from react-dom
import { render } from 'react-dom'
// import router, route, hashHistory, and indexroute methods from react-router
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
// import custom modules
import App from './modules/App'
import Schedule from './modules/Schedule'
import Today from './modules/Today'
import Location from './modules/Location'
import Home from './modules/Home'

render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/" component={Location}></Route>
			<Route path="/schedule/:location" component={Schedule}></Route>
			<Route path="/today/:location" component={Today}></Route>
		</Route>
	</Router>
), document.getElementById('app'))