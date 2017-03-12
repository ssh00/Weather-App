var React = require('react');
var Wheater = require('Wheater');
var WheaterForm = require('WheaterForm');
var WheaterMessage = require('WheaterMessage');

var Wheater = React.createClass({
  render: function(){
    return(
      <div>
      <h3>Wheater</h3>
      <WheaterForm></WheaterForm>
      <WheaterMessage></WheaterMessage>
      </div>
    );
  }
});
module.exports = Wheater;
