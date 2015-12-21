import React from 'react';
import ResumeQuotes from './ResumeQuotes.jsx';
import ResumeSkills from './ResumeSkills.jsx';
import ResumeWorkExperiences from './ResumeWorkExperiences.jsx';
import ResumeProjects from './ResumeProjects.jsx';
import ResumeEducations from './ResumeEducations.jsx';

export default class ResumeBody extends React.Component {
  static propTypes = {
    body: React.PropTypes.shape({
      quotes: React.PropTypes.array,
      skills: React.PropTypes.array,
      workExperiences: React.PropTypes.array,
      projects: React.PropTypes.array,
      educations: React.PropTypes.array
    })
  };

  render() {
    if (!this.props.body) {
      return <div></div>
    }

    return(
      <div className="resumeBody">
        <ResumeQuotes quotes={this.props.body.quotes} />
        <ResumeSkills skills={this.props.body.skills} />
        <ResumeWorkExperiences experiences={this.props.body.workExperiences} />
        <ResumeProjects projects={this.props.body.projects} />
        <ResumeEducations educations={this.props.body.educations} />
      </div>
    )
  }
}
