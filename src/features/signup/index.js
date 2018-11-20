import React, { Component } from 'react';

import { Redirect } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { auth } from "../../config/firebase";

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

class Signup extends Component {

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
      pwdIsVisible: false,
      formErrorMsg: '',
      showPwd: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.togglePwdVisiblity = this.togglePwdVisiblity.bind(this)
  }

  togglePwdVisiblity() {
    this.setState({
      showPwd: !this.state.showPwd
    });
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
      [e.target.id + 'Error']: (e.target.value === '') ? true : false
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, pwd } = this.state
    auth
      .createUser(email, pwd)
      .then(user => {
        console.log('TODO: manage user registration. ', user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.setState({
          formErrorMsg: errorMessage
        })
        console.log('TODO: manage registration errors. ', errorCode, errorMessage);
      })
  }

  render() {
    const { classes } = this.props;
    const { email, pwd, emailError, pwdError, emailErrorMsg, pwdErrorMsg, formErrorMsg, showPwd } = this.state;
    const isInvalid = (email && pwd) ? false : true;

    const { redirectToReferrer } = this.state
    if ((redirectToReferrer === true)) {
      return <Redirect to="/" />
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className={classes.container}>
          <legend>Login</legend>
          <p>{formErrorMsg}</p>
          <TextField
            id="email"
            label="Email"
            error={emailError}
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleInputChange}
            helperText={emailError ? emailErrorMsg : ''}
          />
          <Input
            type={showPwd ? "text" : "password"}
            id="pwd"
            label="Password"
            error={this.state.pwdError}
            className={classes.textField}
            value={pwd}
            onChange={this.handleInputChange}
            helperText={pwdError ? pwdErrorMsg : ''}
          />
          <div onClick={this.togglePwdVisiblity}>Show password</div>
        </fieldset>
        <Button variant="contained" color="primary" type="submit" disabled={isInvalid}>Invia</Button>
      </form>
    )
  }

}

export default withStyles(styles)(Signup);