import React, { Component } from 'react';

import { Redirect } from "react-router-dom";

import { fakeAuth } from "../../services/auth";

class Signin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: false
    }
  }

  signin = () => {
    fakeAuth.login(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { redirectToReferrer } = this.state
    if ((redirectToReferrer === true) || (fakeAuth.isAuth === true)) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <p>Todo: if signed-in redirect to homepage</p>
        <button onClick={this.signin}>Log in</button>
      </div>
    )
  }

}

export default Signin;