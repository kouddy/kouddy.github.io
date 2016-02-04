import alt from '../libs/alt';
import ResumeActions from '../actions/ResumeActions';
import resumeJSON from '../assets/resume.json';

class ResumeStore {
  constructor() {
    this.bindActions(ResumeActions);
    this.originalResume = null;
    this.resume = null;
  };

  getById(id) {
    this.originalResume = resumeJSON;
    this.resume = resumeJSON;
    this.setState({
      originalResume: this.originalResume,
      resume: this.resume
    });
  }

  findSkills(resume) {

  }

  filterBySkills(skills, resume) {
    resume = JSON.parse(JSON.stringify(resume));

    resume.body.workExperiences = filterWorkExperiencesBySkills(skills, resume.body.workExperiences);
    resume.body.projects = filterProjectsBySkills(skills, resume.body.projects);

    return resume;
  }

  filterWorkExperiencesBySkills(skills, workExperiences) {
    if (!skills) {
      return null;
    }

    return workExperiences ? workExperiences.filter((workExperience) => {
      const descriptions = workExperience.descriptions.join(" ");
      return skills.filter((skill) => descriptions.indexOf(skill) > 0).length > 0;
    }) : null;
  }

  filterProjectsBySkills(skills, projects) {
    if (!skills) {
      return null;
    }

    return projects ? projects.filter((project) => {
      const descriptions = project.descriptions.join(" ");
      return skills.filter((skill) => descriptions.indexOf(skill) > 0).length > 0;
    }) : null;
  }

  displayExperienceOnly() {
    const resume = JSON.parse(JSON.stringify(this.originalResume));
    resume.header = null;
    this.setState({
      originalResume: this.originalResume,
      resume: resume
    });
  }
}

export default alt.createStore(ResumeStore, "ResumeStore");
