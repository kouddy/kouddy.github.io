import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Resume from './components/Resume.jsx';

import AltContainer from 'alt-container';
import ResumeActions from './actions/ResumeActions';
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

ResumeActions.getById(1);

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

console.log("test");
const div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/resume" component={ResumeViewHolder} />
    </Route>
  </Router>
 ), div);
