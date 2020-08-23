import React from "react";
import {
  makeStyles,
  Paper,
  Typography,
  Divider,
  Button,
  Grid,
  Container,
  Box,
} from "@material-ui/core";
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
    <Box className={classes.root}>
      {projectData.map((data, index) => (
        <Box key={index} mb={2}>
          <Paper className={classes.root} elevation={cardElevation}>
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
              <img
                src={data.image}
                alt={data.name}
                className={classes.image}
                height="auto"
                width="auto"
              />
            </Grid>
            <Divider className={classes.divider} />
            <Container className={classes.button}>
              <Button
                variant="contained"
                color="primary"
                href={data.githubLink}
              >
                GitHub
              </Button>
            </Container>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
