import alt from '../libs/alt';
import ResumeActions from '../actions/ResumeActions';
import resumeJSON from '../assets/resume.json';

class ResumeStore {
  constructor() {
    this.bindActions(ResumeActions);
    this.resume = resumeJSON;
  };

  displayExperienceOnly() {
    const resume = this.resume;
    resume.header = null;
  }
}

export default alt.createStore(ResumeStore, "ResumeStore");
