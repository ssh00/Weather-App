var React = require('react');
var About = require('About');

var About = (props) => {
    return(
      <div>
      <h1 className="text-center">About</h1>
      <p>This is a Weather app built using React.</p>
      <p>Tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - Javascript framework used.
        </li>
        <li>
          <a href="https://openweathermap.org/">Open wheater map</a> - API used.
        </li>
      </ul>
      </div>
    )
  };
module.exports = About;
