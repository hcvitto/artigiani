import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import Mainnav from './mainnav/';
import User from './user/';

const styles = {
};


function Sidebar(props) {
  return (
    <Drawer anchor="right" open={props.open}>
      <div
        tabIndex={0}
        role="button"
        onClick={props.handleClick}
        onKeyDown={props.handleClick}
      >          
        {
          props.isAuth 
          ? <User isAuth={props.isAuth} /> 
          : ''
        }
        <Divider />
        <Mainnav isAuth={props.isAuth} />
      </div>
    </Drawer>
  )
}

export default withStyles(styles)(Sidebar)