import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import {IndexLink, Link} from 'react-router';
require('../../scss/style.scss');

const App = () => (
    <div>
      <div>
        <ul className="nav">
          <li className="item"><IndexLink to="/">Hem<hr/></IndexLink></li>
          <li className="item">Om stugan<hr/></li>
          <li className=""><IndexLink to="/"><img src="img/logo.png"/></IndexLink></li>
          <li className="item">För hyresgäster<hr/></li>
          <li className="item">Kontakt<hr/></li>
        </ul>
      </div>
      <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
      </div>
    </div>
);

export default App;
