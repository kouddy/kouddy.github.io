import React from 'react';

export default class ResumeQuotes extends React.Component {
  static propTypes = {
    quotes: React.PropTypes.array
  };

  render() {
    if (!this.props.quotes) {
      return <div></div>
    }
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
    quote: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      quote: React.PropTypes.string,
      title: React.PropTypes.string,
      organizationName: React.PropTypes.string
    })
  };

  render() {
    if (!this.props.quote) {
      return <div></div>
    }

    var restOfQuote = [ this.props.quote.name || null, this.props.quote.title || null , this.props.quote.organizationName || null].filter((v) => v !== null).join(", ");

    return (
      <div className="resumeQuote">
        <span className="quote">{this.props.quote.quote || ""}</span>
        <span>{restOfQuote && this.props.quote.quote ? "-" : ""}</span>
        <span className="restOfQuote">{restOfQuote}</span>
      </div>
    );
  }
}
