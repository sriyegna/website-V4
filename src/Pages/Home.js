import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";
import { links } from "../Navigation/Links";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    margin: "20px",
  },
  heading: {
    textDecoration: "underline",
  },
  darkGreyName: {
    color: "rgb(104,104,104)",
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
  lightGreyName: {
    color: "rgb(208,208,208)",
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
  accordionDetails: {
    paddingBottom: "40px",
    paddingTop: "0",
  },
  container: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  projects: {
    marginTop: "30px",
  },
  box: {
    "& p": {
      paddingTop: "10px",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Paper className={classes.root}>
      <Typography align="center" variant="h4">
        Hi, my name is Sri
        <span
          className={
            theme.palette.type === "dark"
              ? classes.darkGreyName
              : classes.lightGreyName
          }
        >
          nath
        </span>{" "}
        Natarajan.
      </Typography>
      <Container className={classes.container}>
        <Box>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>My vision</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Box className={classes.box}>
                <Typography>
                  I enjoy learning about programming and algorithms.
                </Typography>
                <Typography>
                  I have been tinkering with technology for as long as I can
                  remember and I hope to use the knowledge I have acquired to
                  work in a tech company whose purpose is to not only innovate
                  and expand their current line of products, but to also invent
                  and expand our knowledge of what we can accomplish as a race.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>My software</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Box className={classes.box}>
                <Typography>
                  I spend a lot of my free time developing small projects to
                  help me in my day to day life, or just because I can.
                </Typography>
                <Typography>
                  It's always fun to learn new languages, frameworks, and
                  libraries and it's fascinating when I'm able to put it to use.
                </Typography>
                <Typography>
                  All of my projects are open sourced and accessible on{" "}
                  <Link href={links.GitHub}>GitHub</Link>.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                My programming experience
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Box>
                <Box className={classes.box}>
                  <Typography>
                    I have extensive experience with many languages and
                    frameworks.
                  </Typography>
                  <Typography variant="body2">
                    Languages: JavaScript, TypeScript, PHP, HTML, CSS, SQL, C,
                    C++, C#, Python, Java
                  </Typography>
                  <Typography variant="body2">
                    Frameworks: Angular, .NET Core, MS Identity Core, Selenium,
                    BootStrap, Material UI, ROBOT, RIDE, edgeConnect UXP
                  </Typography>
                  <Typography variant="body2">
                    Libraries: ReactJS, JQuery, Redux, Chart.js
                  </Typography>
                  <Typography variant="body2">
                    IDEs: VS Code, Visual Studio, NetBeans, Eclipse, PyCharm,
                    Android Studio
                  </Typography>
                  <Typography variant="body2">
                    Additional Tools: Git, Jira, Jenkins, ServiceNow, Postman,
                    SQL Server Management Studio
                  </Typography>
                </Box>
                <Box style={{ paddingTop: "20px" }}>
                  <Typography variant="caption">
                    * I have experience with many more languages, frameworks,
                    libraries, IDEs, and tools. If you would like to know some
                    specifics, don't hesitate to{" "}
                    <Link href={links.Email}>Contact Me</Link>.
                  </Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                My work experience
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Box className={classes.box}>
                <Typography>
                  I have been fortunate enough to be employed by BlackBerry, and
                  FirstOntario Credit Union.
                </Typography>
                <Typography variant="body2">
                  At BlackBerry I developed a responsive ReactJS web application
                  using Material UI and Redux. I also developed automated test
                  scripts.
                </Typography>
                <Typography variant="body2">
                  At FirstOntario Credit Union, I developed a responsive web
                  application using HTML, CSS, JavaScript, and edgeConnect UXP.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                My educational experience
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Box className={classes.box}>
                <Typography>
                  I have completed a 2 year degree at Mohawk College in Computer
                  Systems Technology.
                </Typography>
                <Typography>
                  I have furthered my education by taking courses for Android
                  application development and Angular development at the
                  University of Toronto.
                </Typography>
                <Typography>
                  I have recently completed my degree in Bachelor of Computing
                  at the University of Guelph.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box className={classes.projects}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                My latest project
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Box className={classes.box}>
                <Typography>
                  Tasks Today is a simple application that uses ReactJS,
                  Material UI, Material UI Rich Text Editor, and FullCalendar to
                  display a calendar of events to the user.
                </Typography>
                <Typography>
                  The application uses Google FireBase to handle storing the
                  data and authenticate users.
                </Typography>
                <Typography>
                  I use the application to keep track of what I've done for the
                  day for my next daily scrum and so that I can view my progress
                  at any point in time.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                My most challenging project
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Box className={classes.box}>
                <Typography>
                  MultiPh.one is an application that uses Angular, BootStrap,
                  and SignalWire API to give a user free numbers they can use to
                  hide their personal number, or text with.
                </Typography>
                <Typography>
                  The application uses a backend written in .NET Core to handle
                  user authentication. The backend also storesthe data in a SQL
                  server, and handles receiving, sending, and routing for calls
                  or messages.
                </Typography>
                <Typography>
                  I built the application for fun when I started getting spam
                  calls and found SignalWire only costs 8 cents a month to rent
                  a number.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                My most entertaining project
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Box className={classes.box}>
                <Typography>
                  Pikaptcha was an application to mass generate Pokemon Go
                  accounts using Python, Selenium, and 2Captcha.
                </Typography>
                <Typography>
                  The application would create headless chrome instances and
                  follow the Pokemon Go signup process and bypass Google's
                  reCaptcha using 2Captchas paid service, and verify the email
                  address. I also allowed users who could not pay the ability to
                  automate most of the process with the exception of the
                  reCaptcha solve.
                </Typography>
                <Typography>
                  I built the application for fun when the existing application
                  developed by another became obselete after Niantic implemented
                  reCaptcha. The only alternative was someones program who
                  charged $10, so I created this for players to use for free.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Paper>
  );
};

export default Home;
