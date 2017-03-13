var React = require('react');
var Examples = require('Examples');
var {Link} = require('react-router');

var Examples = (props) => {
    return(
      <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are few example locations to try out:</p>
      <ol>
        <li>
          <Link to= '/?location=Miami'>Miami, FA</Link>
        </li>
        <li>
          <Link to= '/?location=Casablanca'>Casablanca, MA</Link>
        </li>
      </ol>
      </div>
    )
  };
module.exports = Examples;
