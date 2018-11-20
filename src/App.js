import React, { Component } from 'react';

import { BrowserRouter, Route } from "react-router-dom";

import { auth } from "./config/firebase";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import PrivateRoute from './components/privateRoute';

//import { fakeAuth } from './services/auth';

import Header from './components/app/header';
import Footer from './components/app/footer';
import Home from './features/home/';
import Signin from './features/signin/';
import Signup from './features/signup/';
import User from './features/user/';

import './assets/styles/main.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: purple,
    secondary: green,
  }
});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      isAuth: false
    }
  }
  componentDidMount() {
    // TODO: test state alternatives: context / redux
    this.listener = auth.onAuthStateChanged(user => {
      if (user) {
        //console.log('componentDidMount', user)
        this.setState({
          userEmail: user.email,
          isAuth: true
        })
      } else {
        this.setState({
          user: null,
          isAuth: false
        })
      }
    })
  }
  componentWillUnmount() {
    this.listener()
  }

  render() {

    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Header isAuth={this.state.isAuth} />
            <div>
              <Route
                path="/"
                exact
                component={Home}
              />
              <Route
                path="/sign-in"
                component={Signin}
              />
              <Route
                path="/registrati"
                component={Signup}
              />
              <PrivateRoute 
                path='/user' 
                component={User} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
