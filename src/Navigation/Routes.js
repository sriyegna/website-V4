import React from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";

const Routes = [
  { path: "/", content: <Home /> },
  { path: "/about", content: <About /> },
  { path: "/projects", content: <Projects /> },
  { path: "/resume", content: <span>resume</span> },
  { path: "/contact", content: <span>contact</span> },
];

export default Routes;
