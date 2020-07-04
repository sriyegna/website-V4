import React from "react";
import MUIDrawer from "./Containers/Drawer/MUIDrawer";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

function App() {
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
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MUIDrawer></MUIDrawer>
      </ThemeProvider>
    </div>
  );
}

export default App;
