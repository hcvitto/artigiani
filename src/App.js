import React, { Component } from 'react';

import { Route } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import Header from './components/app/header';
import Footer from './components/app/footer';

import Home from './features/home/';
import Signin from './features/signin/';
import Signup from './features/signup/';


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
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <div>
            <Route
              key="0"
              path="/"
              exact="true"
              component={Home}
            />
            <Route
              key="1"
              path="/sign-in"
              component={Signin}
            />
            <Route
              key="2"
              path="/sign-up"
              component={Signup}
            />

          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
