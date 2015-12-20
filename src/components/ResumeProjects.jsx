import React from 'react';
import moment from 'moment';

export default class ResumeProjects extends React.Component {
  static propTypes = {
    projects: React.PropTypes.array
  }

  render() {
    var projects = this.props.projects ? this.props.projects.map((project) => {
      return <ResumeProject key={project.id} project={project} />
    }) : "";

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
    project: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string,
      websiteURL: React.PropTypes.string,
      from: React.PropTypes.number,
      to: React.PropTypes.number,
      imageURL: React.PropTypes.string,
      descriptions: React.PropTypes.array
    })
  };

  render() {
    if (!this.props.project) {
      return <div></div>
    }

    var descriptions = this.props.project ? this.props.project.descriptions.map((description) => {
      return <li key={description || ""}>{description || ""}</li>
    }) : "";
    return (
      <div className="subSection resumeProject">
        <div className="header">
          <div className="name">
            {
              this.props.project.websiteURL ?
              <a href={this.props.project.websiteURL}>{this.props.project.name || ""}<sup><i className="fa fa-external-link"></i></sup></a>
              : this.props.project.name || ""
            }
          </div>
          <div className="restOfHeader timeSpan">
            {[moment(this.props.project.from || 0).format('MMM YYYY'), this.props.project.to ? moment(this.props.project.to).format('MMM YYYY') : "Present"].join(" - ")}
          </div>
        </div>
        <div className="body">
            {this.props.project.imageURL ? <div className="image"><img src={this.props.project.imageURL}></img></div> : ""}
            <div>
              <ul>{descriptions}</ul>
            </div>
        </div>
      </div>
    );
  }
}
