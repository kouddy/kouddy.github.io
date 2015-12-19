import React from 'react';
import ResumeHeader from './ResumeHeader.jsx';
import ResumeBody from './ResumeBody.jsx';

import '../css/resume.scss';

import resumeJSON from '../assets/resume.json';

export default class Resume extends React.Component {
  static propTypes = {
    resume: React.PropTypes.object.isRequired
  };

  render() {
    var resume = resumeJSON;
    return (
      <div className="resume">
        <ResumeHeader header={resume.header} />
        <ResumeBody body={resume.body} />
      </div>
    );
  }
}
