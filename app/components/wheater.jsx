var React = require('react');
var Wheater = require('Wheater');
var WheaterForm = require('WheaterForm');
var WheaterMessage = require('WheaterMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Wheater = React.createClass({
  getInitialState: function () {
    return{
      isLoading: false
    }
  },
  HandleSearch: function(location){
    var that = this;

    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });

  },
  render: function(){
    var {isLoading, temp, location}= this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      }else if (temp && location) {
        return <WheaterMessage temp={temp} location={location}/>;

      }
    }
    return(
      <div>
      <h1 className="text-center">Get Weather</h1>
      <WheaterForm onSearch={this.HandleSearch}/>
      {renderMessage()}
      </div>
    )
  }
});
module.exports = Wheater;
