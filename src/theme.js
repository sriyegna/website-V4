import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme } from "@material-ui/core/styles";

import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

const theme = React.useMemo(
  () =>
    createMuiTheme({
      palette: {
        type: prefersDarkMode ? "dark" : "light",
        primary: {
          main: purple[500],
        },
        secondary: {
          main: green[500],
        },
      },
    }),
  [prefersDarkMode]
);

export default theme;
