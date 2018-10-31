import React from 'react';
import { Route, Redirect } from "react-router-dom";

import { fakeAuth } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={ (props) => (
    fakeAuth.isAuth === true
      ? <Component {...props} />
      : <Redirect to="/sign-in" />
  )} />
)

export default PrivateRoute;