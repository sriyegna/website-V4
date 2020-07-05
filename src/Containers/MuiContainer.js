import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { themeObject } from "../themeObject";
import Routes from "../Navigation/Routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MuiAppBar from "../Components/Drawer/AppBar";
import MuiDrawer from "../Components/Drawer/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const useLightMode = () => {
  const [theme, setTheme] = useState(themeObject);

  const toggleLightMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: theme.palette.type === "light" ? "dark" : "light",
      },
    };
    setTheme(updatedTheme);
    console.log(updatedTheme);
  };
  return [theme, toggleLightMode];
};

const MuiContainer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [theme, toggleLightMode] = useLightMode();
  const themeConfig = createMuiTheme(theme);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={themeConfig}>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <MuiAppBar
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            toggleLightMode={toggleLightMode}
          />
          <MuiDrawer open={open} handleDrawerClose={handleDrawerClose} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              {Routes.map((route, index) => (
                <Route key={index} exact path={route.path}>
                  {route.content}
                </Route>
              ))}
            </Switch>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};
export default MuiContainer;
