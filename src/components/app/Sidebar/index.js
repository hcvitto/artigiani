import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import Mainnav from './mainnav/';

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
        <Mainnav />
      </div>
    </Drawer>
  )
}

export default withStyles(styles)(Sidebar)