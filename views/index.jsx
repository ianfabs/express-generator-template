var React = require('react');
var DefaultLayout = require('./layout');

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title} stylesheet="/stylesheets/style.css" script="/javascripts/main.js">
        <h1>
          {this.props.title}
        </h1>
        <p>
          Welcome to express
        </p>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;