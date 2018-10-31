import React, { Component } from 'react';

import { Route } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import PrivateRoute from './components/privateRoute';

import { fakeAuth } from './services/auth';

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
  render() {

    /*const routes = appRoutes.map((route, i) => {
      if (route.isPrivate) {
        //const Compo = route.component
        return <PrivateRoute
            component={route.component}
            key={i}
            path={route.path}
          />  
      }

      return <Route
          key={i}
          path={route.path}
          exact={route.exact ? true : false}
          render={props => (
            <route.component {...props} />
          )}
        />
    });*/

    return (
      <MuiThemeProvider theme={theme}>
        {/* cambiare isAuth con context / global state  */}
        <div className="App">
          <Header isAuth={fakeAuth.isAuth} />
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
              path="/sign-up"
              component={Signup}
            />
            <PrivateRoute 
              path='/user' 
              component={User} />
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
