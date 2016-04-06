import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Index.scss';

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 className={s.root}>Hello World.</h1>
      </div>
    );
  }
}

export default withStyles(Index, s);
