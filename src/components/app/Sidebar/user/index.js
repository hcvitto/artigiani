import React, { Component } from 'react';

import { UserConsumer } from '../../../../providers/User';

import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import * as routes from '../../../../config/routes.js';

import { users } from '../../../../services/mocks/users';

import * as auth from "../../../../services/auth";

import styles from './sidebar.user.module.css';

class User extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const u = localStorage.getItem('user')
    console.log('componentDidMount sidebar', u)
    if (u) {
      this.setState({
        user: JSON.parse(localStorage.getItem('user'))
      })
    }
  }

  handleLogout() {
    auth
      .logoutUser()
      .then(() => {
        console.log('logged out');
        localStorage.removeItem('user')
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
            ? <div className={styles['sidebar-user']}>
                <div className={styles['avatar']}>
                  <div className={styles['img']} style={{backgroundImage: "url(" + this.state.user.avatar + ")"}}></div>
                </div>
                <p>
                  <Link to={routes.USER}>Area utente</Link>
                </p>
                <div>
                  <button onClick={this.handleLogout}>Logout</button>
                </div>
              </div>
            : null
          )}
        </UserConsumer>
      )  
  }
}

export default withRouter(User);