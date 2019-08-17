import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const Meta = props => {
  return (
    <Helmet>
      <title>React Material UI</title>
      <meta name="title" content="React Material UI" />
      <meta name="description" content="React Material UI" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>
  );
};

Meta.propTypes = propTypes;
Meta.defaultProps = defaultProps;

export default Meta;
export { propTypes, defaultProps };
