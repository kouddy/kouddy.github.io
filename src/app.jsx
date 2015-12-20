import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Resume from './components/Resume.jsx';

import AltContainer from 'alt-container';
import ResumeStore from './stores/ResumeStore';

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

class ResumeViewHolder extends React.Component {
  render() {
    return (
        <AltContainer stores={[ResumeStore]} inject={{
          resume: () => ResumeStore.getState().resume
        }}>
        <Resume />
      </AltContainer>
    )
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/resume" component={ResumeViewHolder} />
    </Route>
  </Router>
 ), document.getElementById("container"));
