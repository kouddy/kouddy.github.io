import React from 'react';
import moment from 'moment';

export default class ResumeWorkExperiences extends React.Component {
  static propTypes = {
    experiences: React.PropTypes.array
  }

  render() {
    if (!this.props.experiences) {
      return <div></div>
    }

    var experiences = this.props.experiences.map((experience) => {
      return <ResumeWorkExperience key={experience.id} experience={experience} />
    });

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
    experience: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      organizationName: React.PropTypes.string,
      titile: React.PropTypes.string,
      location: React.PropTypes.string,
      from: React.PropTypes.number,
      to: React.PropTypes.number,
      descriptions: React.PropTypes.array
    })
  };

  render() {
    if (!this.props.experience) {
      return <div></div>
    }

    var descriptions = this.props.experience.descriptions ? this.props.experience.descriptions.map((description) => {
      return <li key={description} className="description">{description}</li>
    }) : "";

    return (
      <div className="subSection resumeWorkExperience">
        <div className="header">
          <div>
            <span className="organizationName">{this.props.experience.organizationName || ""}</span>
            <span className="title">{this.props.experience.title || ""}</span>
          </div>
          <div className="restOfHeader">
            <span className="timeSpan">
              {[moment(this.props.experience.from || 0).format('MMM YYYY'), this.props.experience.to ? moment(this.props.experience.to).format('MMM YYYY') : "Present"].join(" - ")}
            </span>
            <span className="location">{this.props.experience.location || 0}</span>
          </div>
        </div>
        <div className="body">
          <ul className="descriptions">{descriptions}</ul>
        </div>
      </div>
    );
  }

}
