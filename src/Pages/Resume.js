import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ResumePDF from "../Assets/resume.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    margin: "20px",
  },
  divider: {
    marginTop: "15px",
    marginBottom: "15px",
  },
  button: {
    textAlign: "center",
    marginTop: "15px",
    marginBottom: "15px",
  },
  embedResume: {
    width: "100%",
    height: "800px",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography align="center" variant="h4">
        Resume
      </Typography>
      <Container className={classes.button}>
        <Button variant="contained" color="primary" href={ResumePDF}>
          Download
        </Button>
      </Container>
      <Divider className={classes.divider} />
      <embed
        src={ResumePDF}
        type="application/pdf"
        className={classes.embedResume}
      />
    </Paper>
  );
};

export default Resume;
