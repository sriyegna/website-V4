import React from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Resume from "../Pages/Resume";
import Contact from "../Pages/Contact";

const Routes = [
  { path: "/", content: <Home /> },
  { path: "/about", content: <About /> },
  { path: "/projects", content: <Projects /> },
  { path: "/resume", content: <Resume /> },
  { path: "/contact", content: <Contact /> },
];

export default Routes;
