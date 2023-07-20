import React from "react";
import PropTypes from "prop-types";

export const CustomBadge = ({ childrenContent, badgeBGColor }) => {
  return (
    <div className="col-12 col-md-2 my-2">
      <span className={`badge rounded-pill ${badgeBGColor}`}>
        {childrenContent}
      </span>
    </div>
  );
};
CustomBadge.propTypes = {
  childrenContent: PropTypes.string.isRequired,
  badgeBGColor: PropTypes.string.isRequired,
};
