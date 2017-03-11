var React = require('react');
var Navbar = require('Navbar');

var Main = React.createClass({
  render: function(){
    return(
      <div>
      <Navbar />
      <h2>Main Component</h2>
      </div>
    );
  }
});
module.exports = Main;
