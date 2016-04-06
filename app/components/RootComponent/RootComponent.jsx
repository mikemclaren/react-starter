import React, { PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from '../App';
import Index from '../Index';

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: Index
    }
  }
];

class RootComponent extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes}></Router>
    );
  }
}
export default RootComponent;
