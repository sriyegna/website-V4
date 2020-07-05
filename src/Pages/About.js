import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../../node_modules/react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Ninja from "../Assets/ninja.png";

import {
  MdSchool,
  MdWork,
  MdAccountCircle,
  MdCode,
  MdComputer,
} from "react-icons/md";
import { FaRegSmileWink, FaHamburger } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    margin: "20px",
  },
  timelineCard: {
    color: theme.palette.type === "dark" ? "white" : "black",
    "& h3": {
      color: 'theme.palette.type === "dark" ? "white" : "black"',
    },
    "& h4": {
      color: theme.palette.type === "dark" ? "white" : "black",
    },
  },
  paperTimeline: {
    backgroundColor:
      theme.palette.type === "dark" ? "transparent" : "lightgrey",
  },
  verticalTimeline: {
    marginTop: "30px",
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();

  const getContentStyle = () => {
    return theme.palette.type === "dark"
      ? { background: "grey", color: "grey" }
      : { background: "#fff", color: "#fff" };
  };

  const getIconStyle = (backgroundColour) => {
    return theme.palette.type === "dark"
      ? { background: backgroundColour, color: "lightgrey" }
      : { background: backgroundColour, color: "#fff" };
  };

  return (
    <Paper className={classes.root}>
      <Card>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image={Ninja}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom align="center" variant="h5" component="h2">
            Hi. In case you haven't figured out, I'm Sri.
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            I am a student in the Bachelor of Computing program at the
            University of Guelph with a genuine passion for software performance
            and security. I love to learn new languages and tinker around with
            something new.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I am primarily focused on developing web applications however I also
            enjoy developing in other languages such as C, C#, and Java. I am
            currently working at BlackBerry creating a web application using
            React to help monitor cybersecurity threats using Cylance -
            artificial based advanced threat detection!
          </Typography>
        </CardContent>
      </Card>
      {/* Vertical Timeline of events  */}
      <Paper className={classes.paperTimeline}>
        <div className={classes.verticalTimeline}>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={getIconStyle("rgb(16, 204, 82)")}
              contentStyle={getContentStyle()}
              icon={<MdAccountCircle />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">
                  The Beginning
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Montreal, QC (1994)
                </h4>
                <p>
                  My adventure began in February 1994. Who could imagine I would
                  end up where I am now.
                </p>
              </Box>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={getIconStyle("rgb(255, 165, 0)")}
              contentStyle={getContentStyle()}
              icon={<MdComputer />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">
                  My First Computer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">(2004)</h4>
                <p>
                  At age 10 my dad helped me build my first computer. By buying
                  the parts{" "}
                  <span className="background-grey">
                    (motherboard, RAM, CPU, PSU, etc)
                  </span>
                  , we assembled the computer and installed Windows! I still
                  remember the day we got high-speed internet!
                </p>
              </Box>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={getIconStyle("rgb(255, 165, 0)")}
              contentStyle={getContentStyle()}
              icon={<MdCode />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">SriScape</h3>
                <h4 className="vertical-timeline-element-subtitle">(2006)</h4>
                <p>
                  Yes that's right. My first experience with programming (Java)
                  was when I made a Old School RuneScape ripoff. At the time it
                  was just RuneScape. None of that pesky RS3. Achieving over{" "}
                  <span className="background-grey">20,000 unique users</span>{" "}
                  on a spare Pentium 3 desktop my dad got from work.
                </p>
              </Box>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={getIconStyle("rgb(255, 165, 0)")}
              contentStyle={getContentStyle()}
              icon={<MdCode />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">
                  Script Kiddie
                </h3>
                <h4 className="vertical-timeline-element-subtitle">(2012)</h4>
                <p>
                  I began to self-learn{" "}
                  <span className="background-grey">
                    Python, HTML, CSS, and JavaScript
                  </span>
                  . Making various simple applications such as a name based
                  notetaker, a personal website, and automating some twitter
                  feeds. I might have done some tinkering with SQL injection and
                  other exploits. Might being the key word <FaRegSmileWink />.
                </p>
              </Box>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={getIconStyle("rgb(233, 30, 99)")}
              contentStyle={getContentStyle()}
              icon={<MdWork />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">
                  Software Test Specialist
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  BlackBerry - Waterloo, ON (2013 - 2014)
                </h4>
                <p>
                  My first real work experience with Canada's largest cell phone
                  company. I got real world experience with{" "}
                  <span className="background-grey">
                    working in teams, and bug reporting and debugging real
                    software
                  </span>
                  ! I developed small scripts to help my day to day duties be
                  easier.
                </p>
              </Box>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={getIconStyle("rgb(233, 30, 99)")}
              contentStyle={getContentStyle()}
              icon={<MdWork />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">
                  Email Services - BB10 Test Prime
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  BlackBerry - Waterloo, ON (2014 - 2015)
                </h4>
                <p>
                  I went back? Damn right I did. BlackBerry was doing amazing
                  work and I enjoyed being part of the process. In this role I
                  learned how to manage an offshore team and boy was that a
                  challenge. I had to work early and late to speak with people
                  in Hyderabad, India. This was a great experience learning{" "}
                  <span className="background-grey">
                    team management and automation testing
                  </span>
                  !
                </p>
              </Box>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={getIconStyle("rgb(255, 165, 0)")}
              contentStyle={getContentStyle()}
              icon={<MdCode />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">Pikaptcha</h3>
                <h4 className="vertical-timeline-element-subtitle">(2016)</h4>
                <p>
                  What do you do when you 'gotta catch em all' but you don't
                  know where they are? You use Pokemon Go Maps. What do you do
                  when you need massive amounts of Pokemon Go accounts to run
                  the map but the only program available is charging people $10?
                  You create a free one. That's what I did. I created Pikaptcha
                  because I know the userbase of Pokemon Go players can't pay
                  the $10, or even have a credit card. Written in{" "}
                  <span className="background-grey">
                    Python and using the Selenium framework and 2Captcha API
                  </span>
                  , I wrote a program to automatically create Pokemon Go
                  accounts, bypass Googles reCaptcha, and verify the emails.
                  Several projects have used my program as a base to continue my
                  legacy.
                </p>
              </Box>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={getIconStyle("rgb(33, 150, 243)")}
              contentStyle={getContentStyle()}
              icon={<MdSchool />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">
                  Mohawk College
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Software Development Diploma (2017)
                </h4>
                <p>
                  I decided to enroll in Mohawk College and get a Diploma. With
                  the help of some great professors, I learned many things about{" "}
                  <span className="background-grey">
                    Reactive Web Development, Java, Systems Design, Software
                    Testing, .NET, Object Oriented Systems, Data Structures,
                    Database Theory, Server Management, and Project Management
                  </span>
                  .
                </p>
              </Box>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              iconStyle={getIconStyle("rgb(16, 204, 82)")}
              contentStyle={getContentStyle()}
              icon={<MdWork />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">
                  Application Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  FirstOntario Credit Union - Stoney Creek, ON (2019)
                </h4>
                <p>
                  My first developer work experience where I designed a new
                  e-banking website using{" "}
                  <span className="background-grey">
                    HTML, CSS, JavaScript, and a proprietary framework known as
                    UXP
                  </span>
                  . I got to participate in the{" "}
                  <span className="background-grey">
                    decision making process with consulting firms, marketing
                    firms, vendors, and our directors
                  </span>
                  . And I can't forget to mention the biweekly barbeques{" "}
                  <FaHamburger />!
                </p>
              </Box>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={getIconStyle("rgb(33, 150, 243)")}
              contentStyle={getContentStyle()}
              icon={<MdSchool />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">
                  University of Guelph (2019)
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bachelor of Computing
                </h4>
                <p>
                  Continuing my education from College, I decided to transfer to
                  the University of Guelph. Here I learned more about{" "}
                  <span className="background-grey">
                    Microcomputers, Software Design and Development, Operating
                    Systems, and Algorithms
                  </span>
                  .
                </p>
              </Box>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={getIconStyle("rgb(255, 165, 0)")}
              contentStyle={getContentStyle()}
              icon={<MdCode />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">MultiPh.one</h3>
                <h4 className="vertical-timeline-element-subtitle">(2019)</h4>
                <p>
                  I had a problem with spam calls. I realized I would enter my
                  phone number without concern when signing up for various
                  websites and services. After some digging, I found a service
                  called SignalWire that will rent you VoIP numbers for
                  $0.08/month. I created an application using{" "}
                  <span className="background-grey">
                    Angular as the frontend, and .NET core (and MS Identity
                    Core) as the backend
                  </span>{" "}
                  to allow me (or any user for that matter) to securely
                  register, purchase a number, and allow call forwarding to a
                  real number from the purchased number. This allowed users to
                  keep their personal number private while still being able to
                  receive calls! Later I added the functionality to allow users
                  to send and receive texts from their purchased number. I also
                  decided that since it only costs $0.08/month per number, users
                  should be able to generate any number of phone numbers they
                  please!
                </p>
              </Box>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={getIconStyle("rgb(255, 165, 0)")}
              contentStyle={getContentStyle()}
              icon={<MdCode />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">
                  StockTracker
                </h3>
                <h4 className="vertical-timeline-element-subtitle">(2019)</h4>
                <p>
                  Who wants to get rich? I do. That's why I created
                  StockTracker. A simple application to perform calculations on
                  historical stock data for tickers that the user enters. The
                  application uses{" "}
                  <span className="background-grey">
                    Angular as a frontend, Python as the backend, and makes REST
                    calls to Stock API's and populates a MySQL database.
                  </span>
                </p>
              </Box>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={getIconStyle("rgb(233, 30, 99)")}
              contentStyle={getContentStyle()}
              icon={<MdWork />}
            >
              <Box className={classes.timelineCard}>
                <h3 className="vertical-timeline-element-title">
                  Software Developer Student
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  BlackBerry - Waterloo, ON (2020)
                </h4>
                <p>
                  That's right, back again! This time I'm here to develop
                  enterprise grade web applications to help monitor cyber
                  security threats using{" "}
                  <span className="background-grey">React</span> and their newly
                  acquired company Cylance! This will be an interesting term
                  that I am sure to enjoy!
                </p>
              </Box>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </Paper>
    </Paper>
  );
};

export default About;
