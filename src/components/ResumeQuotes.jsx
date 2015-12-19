import React from 'react';

export default class ResumeQuotes extends React.Component {
  static propTypes = {
    quotes: React.PropTypes.array
  };

  render() {
    var quotes = this.props.quotes.map((quote) => {
      return <ResumeQuote key={quote.id} quote={quote} />
    });
    return (
      <div className="section">
        <div className="sectionBody resumeQuotes">{quotes}</div>
      </div>
    );
  }
}

class ResumeQuote extends React.Component {
  static propTypes = {
    quote: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="resumeQuote">
        <span className="quote">{this.props.quote.quote}</span>-
        <span className="name">{this.props.quote.name}</span>
        <span>{this.props.quote.title ? ", " + this.props.quote.title : ""}</span>
        <span>{this.props.quote.organizationName ? ", " + this.props.quote.organizationName : ""}</span>
      </div>
    );
  }
}
