import React from 'react';

export default class ResumeHeader extends React.Component {
  static propTypes = {
    header: React.PropTypes.shape({
      name: React.PropTypes.string,
      contactMethods: React.PropTypes.array
    })
  };

  render() {
    if (!this.props.header) {
      return <div></div>
    }

    return (
      <div className="resumeHeader">
        <h1 className="name">{this.props.header.name || ""}</h1>
        <ContactMethods contactMethods={this.props.header.contactMethods} />
      </div>
    );
  }
}

class ContactMethods extends React.Component {
  static propTypes = {
    contactMethods: React.PropTypes.array
  };

  render() {
    if (!this.props.contactMethods) {
      return <div></div>
    }

    var contactMethods = this.props.contactMethods.map((contactMethod) => {
      return <ContactMethod key={contactMethod.id} contactMethod={contactMethod} />
    });
    return <div className="contactMethods">{contactMethods}</div>;
  }
}

class ContactMethod extends React.Component {
  static propTypes = {
    contactMethod: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      type: React.PropTypes.string,
      value: React.PropTypes.string,
      url: React.PropTypes.string
    })
  };

  render() {
    if (!this.props.contactMethod) {
      return <div></div>
    }

    return (
      <span className="contactMethod">
        <i className="fa fa-globe"></i>
        {
          this.props.contactMethod.url ?
          <a href={this.props.contactMethod.url} target="_blank">{this.props.contactMethod.value || ""}</a> : this.props.contactMethod.value || ""
        }
      </span>
    );
  }
}
