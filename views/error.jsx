var react = require('react');
var DefaultLayout = require('./layout');

class ErrorMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title} stylesheet="/stylesheets/style.css" script="/javascripts/main.js">
        <h1>{this.props.message}</h1>
        <h2>{this.props.error.status}</h2>
        <pre>{this.props.error.stack}</pre>
      </DefaultLayout>
    );
  }
}

module.exports = ErrorMessage;
