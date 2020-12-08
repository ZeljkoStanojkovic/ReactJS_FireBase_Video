import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
import Header from './Header';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 function Layout(props) {
    console.info("props",props)
  const classes = useStyles();
  const hideHeader = () => {
    return !props.location.pathname.match(/(login|intro|opponent)/)
  }
  return (
    <div>
     {hideHeader() && <Header/>}
         {props.children}
    </div>
  );
}
export default withRouter(Layout)