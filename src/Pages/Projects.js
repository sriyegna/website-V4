import React from "react";
import Bounce from "react-reveal/Bounce";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Ninja from "../Assets/ninja.png";
import { cardElevation } from "./../themeObject";
import projectData from "./data/Projects";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1%",
    margin: "1%",
  },
  description: {
    marginTop: "10px",
  },
  skill: {
    marginTop: "10px",
  },
  divider: {
    marginTop: "10px",
  },
  grid: {
    marginTop: "20px",
  },
  button: {
    textAlign: "center",
    paddingTop: "15px",
  },
  image: {
    width: "inherit",
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {projectData.map((data, index) => (
        <Paper className={classes.root} elevation={cardElevation} key={index}>
          <Typography align="center" variant="h4">
            {data.name}
          </Typography>
          <Typography
            align="center"
            variant="body2"
            className={classes.description}
          >
            {data.description}
          </Typography>
          {data.skills.map((skill, index) => (
            <Typography
              align="center"
              variant="body1"
              className={classes.skill}
              key={index}
            >
              {skill}
            </Typography>
          ))}
          <Grid container justify="center" className={classes.grid}>
            <img src={data.image} alt={data.name} className={classes.image} />
          </Grid>
          <Divider className={classes.divider} />
          <Container className={classes.button}>
            <Button variant="contained" color="primary" href={data.githubLink}>
              GitHub
            </Button>
          </Container>
        </Paper>
      ))}
    </Paper>
  );
};

export default Projects;
