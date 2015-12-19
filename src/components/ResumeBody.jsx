import React from 'react';
import ResumeQuotes from './ResumeQuotes.jsx';
import ResumeWorkExperiences from './ResumeWorkExperiences.jsx';
import ResumeProjects from './ResumeProjects.jsx';

export default class ResumeBody extends React.Component {
  static propTypes = {
    body: React.PropTypes.object.isRequired
  };

  render() {
    return(
      <div className="resumeBody">
        {this.props.body.quotes ? <ResumeQuotes quotes={this.props.body.quotes} /> : ""}
        {this.props.body.workExperiences ? <ResumeWorkExperiences experiences={this.props.body.workExperiences} /> : ""}
        {this.props.body.projects ? <ResumeProjects projects={this.props.body.projects} /> : ""}
      </div>
    )
  }
}
