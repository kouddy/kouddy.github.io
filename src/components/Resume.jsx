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
            name: "Rashid Khan",
            title: "CEO",
            organizationName: "Infinidy Corp"
          },
          {
            id: 2,
            quote: "David is very cool",
            name: "David",
            title: "Manager",
            organizationName: "Qualcomm Inc."
          }
        ],
        workExperiences: [
          {
            id: 1,
            organizationName: "Facebook",
            title: "Software Developer",
            from: 1450485001344,
            descriptions: [
              "Did this",
              "Did that"
            ]
          },
          {
            id: 2,
            organizationName: "Twitter",
            title: "Software Engineer",
            from: 1450485001344,
            to: 1450485101344,
            descriptions: [
              "Did this",
              "Did that"
            ]
          }
        ],
        projects: [
          {
            id: 1,
            name: "Funny",
            websiteURL: "http://kouddy.github.com",
            from: 1450485001344,
            imageURL: "http://mduan.com/static/img/thumbnail_photomap.png",
            descriptions: [
              "did this",
              "did that"
            ]
          },
          {
            id: 2,
            name: "Funny",
            websiteURL: "http://kouddy.github.com",
            from: 1450485001344,
            to: 1450485001344,
            imageURL: "http://mduan.com/static/img/thumbnail_photomap.png",
            descriptions: [
              "did that",
              "did this"
            ]
          }
        ],
        educations: [
          {
            id: 1,
            degreeName: "Engineering",
            institutionName: "Waterloo",
            from: 1450485001344,
            to: 1450485101344,
            descriptions: [
              "GPA: 3.6/4"
            ]
          }
        ]
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
