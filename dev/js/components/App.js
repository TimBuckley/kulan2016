import React from 'react';

import {IndexLink, Link} from 'react-router';
import Header from './Header';
import Footer from './Footer';
require('../../scss/style.scss');

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        {this.props.children}
        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;