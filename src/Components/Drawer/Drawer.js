import React, { useState, Fragment } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link as MuiLink } from "@material-ui/core";

import { Link } from "react-router-dom";
import { drawerWidth } from "../../themeObject";

import { routeOptions, contactOptions } from "../../Navigation/DrawerOptions";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },

  link: {
    color: "white",
    textDecoration: "none",
  },
  list: {
    width: 250,
  },
}));

const MuiDrawer = (props) => {
  const [state, setState] = useState({ left: false });
  const theme = useTheme();
  const classes = useStyles();
  const { open, handleDrawerClose } = props;

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ left: open });
  };

  return (
    <>
      <Fragment>
        <SwipeableDrawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={toggleDrawer(false)}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              {routeOptions.map((option) => (
                <Link to={option.route} className={classes.link}>
                  <ListItem button key={option.key}>
                    <ListItemIcon>{option.icon}</ListItemIcon>
                    <ListItemText
                      primary={option.text}
                      style={
                        theme.palette.type === "dark"
                          ? { color: "#fff" }
                          : { color: "rgba(0, 0, 0, 0.87)" }
                      }
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
            <List>
              {contactOptions.map((option, index) => (
                <MuiLink
                  href={option.route}
                  className={classes.link}
                  key={index}
                >
                  <ListItem button key={option.key}>
                    <ListItemIcon>{option.icon}</ListItemIcon>
                    <ListItemText
                      primary={option.text}
                      style={
                        theme.palette.type === "dark"
                          ? { color: "#fff" }
                          : { color: "rgba(0, 0, 0, 0.87)" }
                      }
                    />
                  </ListItem>
                </MuiLink>
              ))}
            </List>
          </div>
        </SwipeableDrawer>
      </Fragment>
      <Drawer
        variant="persistent"
        anchor="left"
        className={classes.drawer}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {routeOptions.map((option) => (
            <Link to={option.route} className={classes.link}>
              <ListItem button key={option.key}>
                <ListItemIcon>{option.icon}</ListItemIcon>
                <ListItemText
                  primary={option.text}
                  style={
                    theme.palette.type === "dark"
                      ? { color: "#fff" }
                      : { color: "rgba(0, 0, 0, 0.87)" }
                  }
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {contactOptions.map((option, index) => (
            <MuiLink href={option.route} className={classes.link} key={index}>
              <ListItem button key={option.key}>
                <ListItemIcon>{option.icon}</ListItemIcon>
                <ListItemText
                  primary={option.text}
                  style={
                    theme.palette.type === "dark"
                      ? { color: "#fff" }
                      : { color: "rgba(0, 0, 0, 0.87)" }
                  }
                />
              </ListItem>
            </MuiLink>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
