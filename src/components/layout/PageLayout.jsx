import React from "react";
import PropTypes from "prop-types";

const PageLayout = ({ children, className = "" }) => {
  const classes = ["page", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <main className="container">{children}</main>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PageLayout;
