import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Resume from './components/Resume.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li><Link to="/resume">Resume</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/resume" component={Resume} />
    </Route>
  </Router>
 ), document.getElementById("container"));
