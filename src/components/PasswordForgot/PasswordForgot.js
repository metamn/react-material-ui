import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import Meta, { MetaPropTypes, MetaDefaultProps } from "../Meta";
import Copyright from "../Copyright";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The page meta info
   */
  meta: PropTypes.shape(MetaPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  meta: {
    title: "Password forgot",
    description: "Password forgot"
  }
};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

/**
 * Displays the component
 */
const PasswordForgot = props => {
  const { meta } = props;
  const { title } = meta;
  const classes = useStyles();

  return (
    <>
      <Meta {...meta} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Get a password reset link
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to="/sign-up/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/sign-in/" variant="body2">
                  {"Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

PasswordForgot.propTypes = propTypes;
PasswordForgot.defaultProps = defaultProps;

export default PasswordForgot;
export {
  propTypes as PasswordForgotPropTypes,
  defaultProps as PasswordForgotDefaultProps
};
