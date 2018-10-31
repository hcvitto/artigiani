import React, { Component } from 'react';

import { Route } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import { fakeAuth } from './services/auth';
import appRoutes from './config/routes';

import Header from './components/app/header';
import Footer from './components/app/footer';

import PrivateRoute from './components/privateRoute';


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

    const routes = appRoutes.map((route, i) => {
      if (route.isPrivate) {
        return <PrivateRoute
            key={i}
            path={route.path}
            render={props => (
              <route.component {...props} />
            )}
          />  
      } else {
        return <Route
            key={i}
            path={route.path}
            exact={route.exact ? true : false}
            render={props => (
              <route.component {...props} />
            )}
          />
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        {/* cambiare isAuth con context / global state  */}
        <div className="App" isAuth={fakeAuth.isAuth}>
          <Header isAuth={fakeAuth.isAuth} />
          <div>
            {routes}
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
