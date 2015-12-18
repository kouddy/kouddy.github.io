import React from 'react';
import ResumeHeader from './ResumeHeader.jsx';
import ResumeBody from './ResumeBody.jsx';

import '../css/resume.scss';

export default class Resume extends React.Component {
  static propTypes = {
    resume: React.PropTypes.object.isRequired
  };

  render() {
    var resume = {
      header: {
        name: "David Gao",
        contactMethods: [
          {
            id: 1,
            type: "CONTACT_METHOD_EMAIL",
            value: "jtgao20@gmail.com"
          },
          {
            id: 2,
            type: "CONTACT_METHOD_WEBSITE_PERSONAL",
            value: "kouddy.github.com"
          },
          {
            id: 3,
            type: "CONTACT_METHOD_WEBSITE_GITHUB",
            value: "www.github.com/kouddy"
          }
        ]
      },
      body: {
        quotes: [
          {
            id: 1,
            quote: "David works hard",
            name: "Rashid Khan"
          },
          {
            id: 2,
            quote: "David is very cool",
            name: "David"
          }
        ],
      }
    }

    return (
      <div className="resume">
        <ResumeHeader header={resume.header} />
        <ResumeBody body={resume.body} />
      </div>
    );
  }
}
