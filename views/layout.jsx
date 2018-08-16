var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
          <head>
              <title>{this.props.title}</title>
              <link rel="stylesheet" href={this.props.stylesheet}/>
              <script src={this.props.script} defer></script>
          </head>
          <body>
              {this.props.children}
          </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;