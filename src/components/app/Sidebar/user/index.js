import React, { Component } from 'react';

import { UserConsumer } from '../../../../providers/User';

import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import * as auth from "../../../../services/auth";

class User extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    auth
      .logoutUser()
      .then(() => {
        console.log('logged out');
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
      return (
        <UserConsumer>
          {isAuth => (
            isAuth.isAuth
            ? <div className="sidebar-user">
                <p>User avatar</p>
                <p>User nav</p>
                <p><Link to="/user">Area utente</Link></p>
                <button onClick={this.handleLogout}>Logout</button>
              </div>
            : null
          )}
        </UserConsumer>
      )  
  }
}

export default withRouter(User);