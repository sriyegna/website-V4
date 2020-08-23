import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Drawer, SwipeableDrawer } from "@material-ui/core";
import { drawerWidth } from "../../themeObject";
import DrawerList from "./DrawerList";

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  list: {
    width: drawerWidth,
  },
}));

const MuiDrawer = (props) => {
  const [state, setState] = useState({ left: false });
  const classes = useStyles();
  const { setOpen, handleDrawerClose, manualDrawerOpen } = props;

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
    setState({ left: open });
  };

  return (
    <>
      <>
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
            <DrawerList drawerCloseFn={toggleDrawer} swipeable={false} />
          </div>
        </SwipeableDrawer>
      </>
      <Drawer
        variant="persistent"
        anchor="left"
        className={classes.drawer}
        open={manualDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <DrawerList drawerCloseFn={handleDrawerClose} swipeable={false} />
      </Drawer>
    </>
  );
};

export default MuiDrawer;
