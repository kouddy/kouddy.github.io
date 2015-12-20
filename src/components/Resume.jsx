import React from 'react';
import ResumeHeader from './ResumeHeader.jsx';
import ResumeBody from './ResumeBody.jsx';

import '../css/resume.scss';

export default class Resume extends React.Component {
  static propTypes = {
    resume: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      header: React.PropTypes.object,
      body: React.PropTypes.object
    })
  };

  render() {
    if (!this.props.resume) {
      return <div></div>
    }

    return (
      <div className="resume">
        <ResumeHeader header={this.props.resume.header} />
        <ResumeBody body={this.props.resume.body} />
      </div>
    );
  }
}
