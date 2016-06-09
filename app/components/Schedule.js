var React = require('react');
var Router = require('react-router');

var Profile = React.createClass({
	getInitialState: function(){
	    return {
	      notes: [],
	      bio: {},
	      repos: []
	    }
	  },
	  render: function(){
	    console.log(this.props)
	    return (
	      <div className="row">
	        <div className="col-md-4">
	          user comp
	        </div>
	        <div className="col-md-4">
	          repo comp
	        </div>
	        <div className="col-md-4">
	          notes comp
	        </div>
	      </div>
	    )
	  }
});

module.exports = Profile;