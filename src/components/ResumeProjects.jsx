import React from 'react';
import moment from 'moment';

export default class ResumeProjects extends React.Component {
  static propTypes = {
    projects: React.PropTypes.array
  }

  render() {
    var projects = this.props.projects.map((project) => {
      return <ResumeProject key={project.id} project={project} />
    });
    return (
      <div className="section">
        <div className="sectionTitle"><i className="fa fa-flask"></i>Projects</div>
        <div className="sectionBody resumeProjects">{projects}</div>
      </div>
    );
  }
}

class ResumeProject extends React.Component {
  static propTypes = {
    project: React.PropTypes.object
  };

  render() {
    var descriptions = this.props.project.descriptions.map((description) => {
      return <li key={description}>{description}</li>
    });
    return (
      <div className="subSection resumeProject">
        <div className="header">
          <div className="name">
            <a href={this.props.project.websiteURL}>
              {this.props.project.name}<sup><i className="fa fa-external-link"></i></sup>
            </a>
          </div>
          <div className="timeSpan">
            <span className="from">{moment(this.props.project.from).format('MMM YYYY')}</span>
            -
            <span className="to">{this.props.project.to ? moment(this.props.project.to).format('MMM YYYY') : "Present"}</span>
          </div>
        </div>
        <div className="body">
            <div className="image"><img src={this.props.project.imageURL}></img></div>
            <div>{descriptions.length > 0 ? <ul>{descriptions}</ul> : ""}</div>
        </div>
      </div>
    );
  }
}
