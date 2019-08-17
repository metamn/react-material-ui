import React from "react";
import PropTypes from "prop-types";

import Meta, { MetaPropTypes } from "../Meta";
import Button from "@material-ui/core/Button";

/**
 * Defines the prop types
 */
const propTypes = {
  meta: PropTypes.shape(MetaPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  meta: {
    title: "Sign Up",
    description: "Sign up"
  }
};

/**
 * Displays the component
 */
const SignUp = props => {
  const { meta } = props;

  return (
    <>
      <Meta {...meta} />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </>
  );
};

SignUp.propTypes = propTypes;
SignUp.defaultProps = defaultProps;

export default SignUp;
export { propTypes as SignUpPropTypes, defaultProps as SignUpDefaultProps };
