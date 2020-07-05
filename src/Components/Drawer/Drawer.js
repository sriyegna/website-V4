import React from "react";
import clsx from "clsx";

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

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
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
}));

const MuiDrawer = (props) => {
  const theme = useTheme();
  console.log(theme);
  const classes = useStyles();
  const { open, handleDrawerClose } = props;
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
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
        {contactOptions.map((option) => (
          <MuiLink href={option.route} className={classes.link}>
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
  );
};

export default MuiDrawer;
