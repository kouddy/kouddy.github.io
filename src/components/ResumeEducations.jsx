import React from 'react';
import moment from 'moment';

export default class ResumeEducations extends React.Component {
  static propTypes = {
    educations: React.PropTypes.array
  };

  render() {
    if (!this.props.educations) {
      return <div></div>
    }

    var educations = this.props.educations.map((education) => {
      return <ResumeEducation key={education.id} education={education} />
    });

    return (
      <div className="section">
        <div className="sectionTitle"><i className="fa fa-book"></i>Educations</div>
        <div className="sectionBody resumeEducations">{educations}</div>
      </div>
    );
  }
}

class ResumeEducation extends React.Component {
  static propTypes = {
    education: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      degreeName: React.PropTypes.string,
      institutionName: React.PropTypes.string,
      from: React.PropTypes.number,
      to: React.PropTypes.number,
      descriptions: React.PropTypes.array
    })
  };

  render() {
    if (!this.props.education) {
      return <div></div>
    }

    var descriptions = this.props.education.descriptions ? this.props.education.descriptions.map((description) => {
      return <li key={description || ""} className="description">{description || ""}</li>
    }) : "";

    return (
      <div className="subSection resumeEducation">
        <div className="header">
          <div>
            <span className="degreeName">{this.props.education.degreeName || ""}</span>
            <span className="institutionName">{this.props.education.institutionName || ""}</span>
          </div>
          <div className="restOfHeader timeSpan">
            {[moment(this.props.education.from || 0).format('MMM YYYY'), this.props.education.to ? moment(this.props.education.to).format('MMM YYYY') : "Present"].join(" - ")}
          </div>
        </div>
        <div className="body">
          <ul className="descriptions">{descriptions}</ul>
        </div>
      </div>
    );
  }
}
