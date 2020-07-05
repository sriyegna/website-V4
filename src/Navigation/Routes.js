import React from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";

const Routes = [
  { path: "/", content: <Home /> },
  { path: "/about", content: <About /> },
  { path: "/projects", content: <span>projects</span> },
  { path: "/resume", content: <span>resume</span> },
  { path: "/contact", content: <span>contact</span> },
];

export default Routes;
