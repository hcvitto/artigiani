import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';

import { fakeAuth } from "../../../../services/auth";

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true
    }
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout() {
    fakeAuth.logout(() => {
      this.setState(() => ({
        loggedIn: false
      }))
    })
  }
  render() {
    const { loggedIn } = this.state
    if (loggedIn) {
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