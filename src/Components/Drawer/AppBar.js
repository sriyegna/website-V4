import React from "react";
import clsx from "clsx";

import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import MenuIcon from "@material-ui/icons/Menu";

import { drawerWidth } from "../../themeObject";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MuiAppBar = (props) => {
  const { open, handleDrawerOpen, toggleLightMode } = props;
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Button href="/">Sri Natarajan</Button>
        </Typography>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleLightMode}
          color="inherit"
        >
          <Brightness6Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MuiAppBar;
