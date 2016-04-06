import React, { PropTypes } from 'react';

class App extends React.Component {
  static childContextTypes = {
    insertCss: PropTypes.func.isRequired
  };

  getChildContext() {
    return {
      insertCss: (styles) => {
        styles._insertCss()
      }
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
