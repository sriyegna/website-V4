import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Box,
  Typography,
  Card,
  Button,
  CardContent,
} from "@material-ui/core";
import Me from "../Assets/me.jpg";
import { cardElevation } from "../themeObject";
import links from "../Navigation/Links";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1%",
    margin: "1%",
  },
  imageCenter: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "15px",
    width: "auto",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Box m={1}>
            <Card elevation={cardElevation}>
              <img
                src={Me}
                alt="Sri"
                height="400px"
                className={classes.imageCenter}
              />
              <CardContent>
                <Typography gutterBottom align="center">
                  Looking for a software developer?
                </Typography>
                <Typography align="center">
                  Feel free to contact me through any of the means listed on
                  this page.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box m={1}>
            <Box mb={2}>
              <Card className={classes.root} elevation={cardElevation}>
                <CardContent style={{ paddingBottom: "0px" }}>
                  <Typography variant="h5" component="h2">
                    Email <EmailIcon />
                  </Typography>
                </CardContent>
                <Box display="flex" justifyContent="center">
                  <Button
                    size="small"
                    color="primary"
                    align="center"
                    href={links.Email}
                  >
                    sriyegna@gmail.com
                  </Button>
                </Box>
              </Card>
            </Box>
            <Box mb={2}>
              <Card className={classes.root} elevation={cardElevation}>
                <CardContent style={{ paddingBottom: "0px" }}>
                  <Typography variant="h5" component="h2">
                    LinkedIn <LinkedInIcon />
                  </Typography>
                </CardContent>
                <Box display="flex" justifyContent="center">
                  <Button
                    size="small"
                    color="primary"
                    align="center"
                    href={links.LinkedIn}
                  >
                    View My Profile
                  </Button>
                </Box>
              </Card>
            </Box>
            <Card className={classes.root} elevation={cardElevation}>
              <CardContent style={{ paddingBottom: "0px" }}>
                <Typography variant="h5" component="h2">
                  Phone <PhoneIcon />
                </Typography>
              </CardContent>
              <Box display="flex" justifyContent="center">
                <Button
                  size="small"
                  color="primary"
                  align="center"
                  href={links.Phone}
                >
                  Call Me - (647) 832-3934
                </Button>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Resume;
