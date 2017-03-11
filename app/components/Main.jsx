var React = require('react');
var Navbar = require('Navbar');
var Wheater = require('Wheater');
var Examples = require('Examples');


var Main = React.createClass({
  render: function(){
    return(
      <div>
      <Navbar />
      <h2>Main Component</h2>
      {this.props.children}
      </div>
    );
  }
});
module.exports = Main;
