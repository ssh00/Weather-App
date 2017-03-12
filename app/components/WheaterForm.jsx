var React = require('react');
var WheaterForm = require('WheaterForm');

var WheaterForm = React.createClass({
  render: function(){
    return(
      <div>
        <form>
          <input type="text"/>
          <button>Get Wheater</button>
        </form>
      </div>
    );
  }
});
module.exports = WheaterForm ;
