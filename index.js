// import react, itself
import React from 'react'
// import render method only from react-dom
import { render } from 'react-dom'
// import router, route, browserHistory, and indexroute methods from react-router
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import custom modules
// import App from './modules/App'
// import Schedule from './modules/Schedule'
// import Today from './modules/Today'
import Navigation from './modules/Navigation'
import NavLink from './modules/NavLink'
// import Home from './modules/Home'
import h from './helpers'

/*App*/
var App = React.createClass({
	getInitialState() {
		return {
			location: "",
			status: ""
		}
	},
	learnLocation(enteredLocation) {
		this.setState({ location: enteredLocation})
	},
	render() {
		return (
			<div>
				<LocationPicker learnLocation={this.learnLocation} />
				<Header status={this.state.status} />
				<Today location={this.state.location} status={this.state.status} />
			</div>
		)
	}
});

/*Header*/
var Header = React.createClass({
	render() {
		return (
			<header status={this.props.status}>
				{/* if status === "open" print this or something more robust*/}
			  {/*sample: Golds is {closed/open} <span className="icon-status--open"></span> */}
				<h1>Is Gold's Kids Club Open? <span class="icon-status" id="icon-status"></span></h1>
			</header>
		)
	}
});

/*Today*/
var Today = React.createClass({
	render() {
		return (
			<div>
				<Navigation />
				<h4>Today's Kids Club {h.titleCase(this.props.location)} Schedule</h4>
				<ul>
				  <li>
				    <span class="label">Morning:</span>
				    <span id="js-first-open"></span> - <span id="js-first-close"></span>
				  </li>
				  <li>
				    <span class="label">Afternoon:</span>
				    <span id="js-second-open"></span> - <span id="js-second-close"></span>
				  </li>
				</ul>

				<div class="kc-is-open">
				  <p>You have <span id="js-timeleft"></span> until Kids Club closes.</p>
				</div>

				<div class="kc-is-closed">
				  <p>Kids Club is closed right now but will open again <span class="bold" id="js-next-open"></span></p>
				</div>
			</div>
		)
	}
});

/*LocationPicker*/
var LocationPicker = React.createClass({
	// get context in this component
	contextTypes: {
		router: React.PropTypes.object
	},
	go(e) {
		e.preventDefault()
		const enteredLocation = this.refs.locationId.value.toLowerCase();
		const path = `/today/${enteredLocation}`
		// use this context to push path to the router
		/*this.context.router.push(path)*/
		this.props.learnLocation(enteredLocation);
	},
	render() {
		return (
			<div>
				<h4>Enter a location:</h4>
				<form onSubmit={this.go}>
					<input ref="locationId" type="text" required />
					<button type="submit">Go</button>
				</form>
			</div>
		)
	}
});

var routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		{/*<Route path="/today/:location" component={App} />*/}
		{/*<Route path="/schedule/:location" component={Schedule} />*/}
	</Router>
)

render(routes, document.getElementById('app'))