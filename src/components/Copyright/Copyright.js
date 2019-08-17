import React from "react";
import PropTypes from "prop-types";

import Meta, { MetaPropTypes, MetaDefaultProps } from "../Meta";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The site meta info
   */
  meta: PropTypes.shape(MetaPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  meta: MetaDefaultProps
};

/**
 * Displays the component
 */
const Copyright = props => {
  const { meta } = props;
  const { title, url } = meta;

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={url}>
        {title}
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

Copyright.propTypes = propTypes;
Copyright.defaultProps = defaultProps;

export default Copyright;
export {
  propTypes as CopyrightPropTypes,
  defaultProps as CopyrightDefaultProps
};
