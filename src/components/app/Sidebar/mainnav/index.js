import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function Mainnav(props) {
  const { classes } = props;
  let userNav;
  if (props.isAuth === true) {
    userNav = 'User nav is visible'
  } else {
    userNav = 'User nav is not visible'
  }
  return (
    <div className={classes.root}>
      <div>TODO: {userNav}</div>
      <List component="nav">

        <ListItem button>
          <ListItemText>
            <Link to="/sign-in">Sign in</Link>
          </ListItemText>
        </ListItem>
        
        <ListItem button>
          <ListItemText>
            <Link to="/sign-up">Sign up</Link>
          </ListItemText>
        </ListItem>

      </List>
    </div>
  )
}

Mainnav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mainnav)