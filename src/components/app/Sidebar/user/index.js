import React from 'react';

import { Link } from 'react-router-dom';

const User = (props) => {
  if (props.isAuth === true ) {
    return <div className="sidebar-user"><Link to="/user">User area</Link></div>
  }
  return null;
}

export default User;