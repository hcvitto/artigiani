import React from 'react';
import { Route, Redirect } from "react-router-dom";

import { UserConsumer } from '../providers/User';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <UserConsumer>
    {isAuth => {
      console.log('PrivateRoute.isAuth', isAuth)
      return <Route render={
        props => {
          console.log('PrivateRoute.Route.isAuth', isAuth)
          return isAuth.isAuth
          ? <Component {...props} />
          : <Redirect to="/sign-in" />
      }} { ...rest }  />
    }}
  </UserConsumer>
)

export default PrivateRoute;