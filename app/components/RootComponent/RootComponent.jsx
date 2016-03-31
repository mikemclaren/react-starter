import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class RootComponent extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    );
  }
}
export default RootComponent;
