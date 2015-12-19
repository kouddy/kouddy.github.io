import React from 'react';
import moment from 'moment';

export default class ResumeWorkExperiences extends React.Component {
  static propTypes = {
    experiences: React.PropTypes.array
  }

  render() {
    var experiences = this.props.experiences.map((experience) => {
      return <ResumeWorkExperience key={experience.id} experience={experience} />
    })
    return (
      <div className="section">
        <div className="sectionTitle"><i className="fa fa-briefcase"></i>Work Experiences</div>
        <div className="sectionBody resumeWorkExperiences">{experiences}</div>
      </div>
    );
  }
}

class ResumeWorkExperience extends React.Component {
  static propTypes = {
    experience: React.PropTypes.object
  };

  render() {
    var descriptions = this.props.experience.descriptions.map((description) => {
      return <li key={description} className="description">{description}</li>
    });

    return (
      <div className="subSection resumeWorkExperience">
        <div className="header">
          <div>
            <span className="organizationName">{this.props.experience.organizationName}</span>
            <span className="title">{this.props.experience.title}</span>
          </div>
          <div className="restOfHeader">
            <span className="timeSpan">
              {[moment(this.props.experience.from).format('MMM YYYY'), this.props.experience.to ? moment(this.props.experience.to).format('MMM YYYY') : "Present"].join(" - ")}
            </span>
            <span className="location">{this.props.experience.location}</span>
          </div>
        </div>
        <div className="body">
          {descriptions.length > 0 ? <ul className="descriptions">{descriptions}</ul> : ""}
        </div>
      </div>
    );
  }

}
