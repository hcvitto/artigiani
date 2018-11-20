import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';

import * as auth from "../../../../services/auth";

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuth: this.props.isAuth
    }
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout() {
    auth
      .logoutUser()
      .then(() => {
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    if (this.state.isAuth) {
      return <div className="sidebar-user">
              <p>User avatar</p>
              <p>User nav</p>
              <p><Link to="/user">Area utente</Link></p>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
    }
    return <Redirect to='/' />
  }
}

export default User;