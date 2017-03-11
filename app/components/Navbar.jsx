var React = require('react');
var {Link} = require('react-router');


var Navbar = React.createClass({
  render: function(){
    return(
      <div>
      <h2>navbar</h2>
      <Link to="/">Get Wheater</Link>
      <Link to="/about">About</Link>
      <Link to="/examples">Examples</Link>
      </div>
    );
  }
});
module.exports = Navbar;
