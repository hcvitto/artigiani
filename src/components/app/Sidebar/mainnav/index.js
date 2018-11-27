import React from 'react';

import { Link } from 'react-router-dom';

import { UserConsumer } from '../../../../providers/User';

import * as routes from '../../../../config/routes';

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
  return (
    <div className={classes.root}>
      <List component="nav">
        <UserConsumer>
          {isAuth => (
              isAuth.isAuth
              ? 'Navigazione utente loggato'
              : <React.Fragment>
                  <ListItem button>
                    <ListItemText>
                      <Link to={routes.SIGNIN}>Login</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem button>
                    <ListItemText>
                      <Link to={routes.SIGNUP}>Registrati</Link>
                    </ListItemText>
                  </ListItem>
                </React.Fragment>
            )}
        </UserConsumer>
      </List>
    </div>
  )
}

Mainnav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mainnav)