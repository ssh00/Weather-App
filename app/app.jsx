var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Wheater = require('Wheater');
var About = require('About');
var Examples = require('Examples');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Wheater}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
