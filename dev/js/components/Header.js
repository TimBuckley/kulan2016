/**
 * Created by Daniel on 2016-08-07.
 */
import React from 'react';
import {IndexLink, Link} from 'react-router';


export default class Header extends React.Component{
  render() {
    return (
      <ul className="nav">
        <li className="item"><IndexLink to="/">Hem<hr/></IndexLink></li>
        <li className="item"><Link to="/about">Om stugan<hr/></Link></li>
        <li className=""><IndexLink to="/"><img src="img/logo.png"/></IndexLink></li>
        <li className="item">För hyresgäster<hr/></li>
        <li className="item">Kontakt<hr/></li>
      </ul>
    );
  }
}