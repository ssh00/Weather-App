var React = require('react');
var WheaterMessage = require('WheaterMessage');

var WheaterMessage = React.createClass({
  render: function(){
    var {temp,location}= this.props;

    return(
      <h3 className="text-center">It's it {temp} in {location}.</h3>
    )
  }
});
module.exports = WheaterMessage;
