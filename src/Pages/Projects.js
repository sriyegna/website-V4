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

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    margin: "20px",
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
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Paper className={classes.root} elevation={cardElevation}>
        <Typography align="center" variant="h4">
          Project Name
        </Typography>
        <Typography
          align="center"
          variant="body2"
          className={classes.description}
        >
          Project Description
        </Typography>
        <Typography align="center" variant="body1" className={classes.skill}>
          Skill1
        </Typography>
        <Typography align="center" variant="body1" className={classes.skill}>
          Skill2
        </Typography>
        <Grid container justify="center" className={classes.grid}>
          <img src={Ninja} alt="Ninja" />
        </Grid>
        <Divider className={classes.divider} />
        <Container className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/projectlink"
          >
            GitHub
          </Button>
        </Container>
      </Paper>
    </Paper>
  );
};

export default Projects;
