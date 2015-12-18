import React from 'react';

export default class ResumeHeader extends React.Component {
  static propTypes = {
    header: React.PropTypes.object
  };

  render() {
    return (
      <div className="resumeHeader">
        <h1 className="name">{this.props.header.name}</h1>
        {(this.props.header.contactMethods) ? <ContactMethods contactMethods={this.props.header.contactMethods} /> : ""}
      </div>
    );
  }
}

class ContactMethods extends React.Component {
  static propTypes = {
    contactMethods: React.PropTypes.array.isRequired
  };

  render() {
    var contactMethods = this.props.contactMethods.map((contactMethod) => {
      return <ContactMethod key={contactMethod.id} contactMethod={contactMethod} />
    });
    return(
      <div className="contactMethods">{contactMethods}</div>
    );
  }
}

class ContactMethod extends React.Component {
  static propTypes = {
    contactMethod: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <span className="contactMethod">
        <i className="fa fa-globe"></i>
        <a href={this.props.contactMethod.value} target="_blank">{this.props.contactMethod.value}</a>
      </span>
    );
  }
}
