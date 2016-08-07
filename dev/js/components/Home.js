/**
 * Created by Daniel on 2016-08-07.
 */
import React from 'react';
import {IndexLink, Link} from 'react-router';

import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';


export default class Home extends React.Component{
  render() {
    return (
      <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
      </div>
    );
  }
}