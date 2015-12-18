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
      <div className="resumeQuotes">
        {quotes}
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
        <i>{this.props.quote.quote}</i>-<b>{this.props.quote.name}</b>
      </div>
    );
  }
}
