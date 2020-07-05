import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactsIcon from "@material-ui/icons/Contacts";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const routeOptions = [
  {
    text: "Home",
    key: "home",
    route: "/",
    icon: <HomeIcon />,
  },
  {
    text: "About",
    key: "about",
    route: "/about",
    icon: <PersonIcon />,
  },
  {
    text: "Projects",
    key: "projects",
    route: "/projects",
    icon: <WorkIcon />,
  },
  {
    text: "Resume",
    key: "resume",
    route: "/resume",
    icon: <DescriptionIcon />,
  },
  {
    text: "Contact",
    key: "contact",
    route: "/contact",
    icon: <ContactsIcon />,
  },
];

export const contactOptions = [
  {
    text: "Email",
    key: "email",
    route: "mailto:sriyegna@gmail.com",
    icon: <EmailIcon />,
  },
  {
    text: "GitHub",
    key: "github",
    route: "http://github.com/sriyegna",
    icon: <GitHubIcon />,
  },
  {
    text: "LinkedIn",
    key: "linkedin",
    route: "http://linkedin.com/sriyegna",
    icon: <LinkedInIcon />,
  },
];
