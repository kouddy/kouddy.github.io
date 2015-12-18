import React from 'react';
import ResumeQuotes from './ResumeQuotes.jsx';

export default class ResumeBody extends React.Component {
  static propTypes = {
    body: React.PropTypes.object.isRequired
  };

  render() {
    return(
      <div className="resumeBody">
        {this.props.body.quotes ? <ResumeQuotes quotes={this.props.body.quotes} /> : ""}
      </div>
    )
  }
}
