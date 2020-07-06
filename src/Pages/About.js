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
import { cardElevation } from "./../themeObject";
import { aboutData } from "./data/About";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1%",
    margin: "1%",
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
      <Card elevation={cardElevation}>
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
      <Paper className={classes.paperTimeline} elevation={cardElevation}>
        <div className={classes.verticalTimeline}>
          <VerticalTimeline>
            {aboutData.map((data, index) => (
              <VerticalTimelineElement
                key={index}
                className={data.vteClass}
                iconStyle={getIconStyle(data.iconColor)}
                contentStyle={getContentStyle()}
                icon={data.icon}
              >
                <Box className={classes.timelineCard}>
                  <h3 className="vertical-timeline-element-title">{data.h3}</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {data.h4}
                  </h4>
                  {data.p}
                </Box>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Paper>
    </Paper>
  );
};

export default About;
