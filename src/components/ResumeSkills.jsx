import React from 'react';

export default class ResumeSkills extends React.Component {
  static propTypes = {
    skills: React.PropTypes.array
  };

  render() {
    if (!this.props.skills) {
      return <div></div>
    }

    var listOfGroupedSkills = this.props.skills.map((groupedSkills) => {
      return <ResumeGroupedSkills key={groupedSkills.id} groupedSkills={groupedSkills} />
    });

    return (
      <div className="section">
        <div className="sectionTitle"><i className="fa fa-bar-chart"></i>Skills</div>
        <div className="sectionBody resumeSkills">{listOfGroupedSkills}</div>
      </div>
    );
  }
}

class ResumeGroupedSkills extends React.Component {
  static propTypes = {
    groupedSkills: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      groupName: React.PropTypes.string,
      skills: React.PropTypes.array
    })
  };

  render() {
    if (!this.props.groupedSkills) {
      return <div></div>
    }

    var skills = this.props.groupedSkills.skills ? this.props.groupedSkills.skills.map((skill) => {
      return <ResumeSkill key={skill.id} skill={skill} />
    }) : "";

    return (
      <div className="row resumeGroupedSkills">
        <div className="col-sm-1 groupName">{this.props.groupedSkills.groupName ? this.props.groupedSkills.groupName + ":" : ""}</div>
        <ul className="col-sm-11 skills">{skills}</ul>
      </div>
    );
  }
}

class ResumeSkill extends React.Component {
  static propTypes = {
    skill: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string
    })
  };

  render() {
    if (!this.props.skill) {
      return <li></li>
    }

    return (
      <li className="resumeSkill">{this.props.skill.name || ""}</li>
    );
  }
}
