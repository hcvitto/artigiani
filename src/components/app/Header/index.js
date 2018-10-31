import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Sidebar from '../sidebar';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  } 

  toggleDrawer = () => {
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.props.classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
                Ciao, Pippo
              </Typography>
              <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        <Sidebar open={this.state.sidebar} handleClick={this.toggleDrawer} isAuth={this.props.isAuth} />
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header)