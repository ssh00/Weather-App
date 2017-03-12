var React = require('react');
var WheaterMessage = require('WheaterMessage');

var WheaterMessage = React.createClass({
  render: function(){
    var {temp,location}= this.props;

    return(
      <h3>its {temp} in {location} </h3>
    );
  }
});
module.exports = WheaterMessage;
