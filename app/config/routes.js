var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Header = require('../components/Header');
var Schedule = require('../components/Schedule');
var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;

var IndexRoute = ReactRouter.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
  	<Route path="schedule" component={Schedule} />
  	<IndexRoute component={Header} />
  </Route>
);