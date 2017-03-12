var React = require('react');
var Wheater = require('Wheater');
var WheaterForm = require('WheaterForm');
var WheaterMessage = require('WheaterMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Wheater = React.createClass({
  getInitialState: function () {
    return{
      location: 'Miami',
      temp:88
    }
  },
  HandleSearch: function(location){
    var that = this;
    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp
      });
    },function (errorMessage) {
      alert(errorMessage);
    });
    //this.setState({
    //  location: location,
    //  temp: 23
    //})
  },
  render: function(){
    var {temp, location}= this.state;
    return(
      <div>
      <h3>Wheater</h3>
      <WheaterForm onSearch={this.HandleSearch}></WheaterForm>
      <WheaterMessage temp={temp} location={location}></WheaterMessage>
      </div>
    );
  }
});
module.exports = Wheater;
