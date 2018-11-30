import React, { Component } from 'react';

import { BrowserRouter, Route } from "react-router-dom";

import { auth } from "./config/firebase";

import { UserProvider } from './providers/User';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import PrivateRoute from './components/privateRoute';

import Header from './components/app/header';
import Footer from './components/app/footer';

import Home from './features/home/';
import Signin from './features/signin/';
import Signup from './features/signup/';
import Artigiani from './features/artigiani/';
import Artigiano from './features/artigiano/';

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
      auth: {
        user: null,
        isAuth: false
      }
    }
  }
  componentDidMount() {
    // TODO: test state alternatives: redux
    this.listener = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          auth: {
            user: user,
            isAuth: true
          }
        })
      } else {
        this.setState({
          auth: {
            user: null,
            isAuth: false
          }
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
              <UserProvider value={this.state.auth}>
                <Header />
                <div id="content-wrapper"> 
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
                  <Route
                    path="/artigiani"
                    component={Artigiani}
                  />
                  <Route
                    path="/artigiano/:slug/:id"
                    component={Artigiano}
                  />
                  <PrivateRoute 
                    path='/user' 
                    component={User} />
                </div>
              </UserProvider>
              <Footer />
            </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
