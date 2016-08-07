import React from 'react';

import {IndexLink, Link} from 'react-router';
import Header from './Header';
require('../../scss/style.scss');

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}