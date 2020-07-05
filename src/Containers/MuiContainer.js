import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { themeObject } from "../themeObject";

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
          <div onClick={toggleLightMode}>Change Mode</div>
        </main>
      </div>
    </ThemeProvider>
  );
};
export default MuiContainer;
