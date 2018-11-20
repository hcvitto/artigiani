import React, { Component } from 'react';

import { Redirect } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { fakeAuth } from "../../services/auth";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Signin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: false,
      email: '',
      pwd: '',
      emailError: false,
      pwdError: false,
      emailErrorMsg: 'Campo obbligatorio',
      pwdErrorMsg: 'Campo obbligatorio',
      formErrorMsg: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePwdChange = this.handlePwdChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  signin = () => {
    fakeAuth.login(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
      emailError: (e.target.value === '') ? true : false,
    })
  }
  handlePwdChange(e) {
    this.setState({
      pwd: e.target.value,
      pwdError: (e.target.value === '') ? true : false,
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, pwd } = this.state
    if (email && pwd) {
      alert('start login action')
      return
    } 
    this.setState({
      emailError: (email === '') ? true : false,
      pwdError: (pwd === '') ? true : false,
    })
  }

  render() {
    const { classes } = this.props;

    const { redirectToReferrer } = this.state
    if ((redirectToReferrer === true) || (fakeAuth.isAuth === true)) {
      return <Redirect to="/" />
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className={classes.container}>
          <legend>Login</legend>
          <p>{ this.state.formErrorMsg }</p>
          <TextField
            id="email"
            label="Email"
            error={this.state.emailError}
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleEmailChange}
            helperText={this.state.emailError ? this.state.emailErrorMsg : ''}
          />
          <TextField
            id="pwd"
            label="Password"
            error={this.state.pwdError}
            className={classes.textField}
            value={this.state.pwd}
            onChange={this.handlePwdChange}
            helperText={this.state.pwdError ? this.state.pwdErrorMsg : ''}
          />
        </fieldset>
        <Button variant="contained" color="primary" type="submit">Invia</Button>
      </form>
    )
  }

}

export default withStyles(styles)(Signin);