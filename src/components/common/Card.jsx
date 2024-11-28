import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, className = "", ...props }) => {
  const classes = ["card", className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
