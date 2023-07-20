import React from "react";
import PropTypes from "prop-types";
export const Spinner = ({
  spinnerType,
  textColor,
  spinnerCaption = "Loading...",
}) => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className={`col-12 ${spinnerType} ${textColor}`} role="status">
        <span className="visually-hidden">{spinnerCaption}</span>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  spinnerType: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  spinnerCaption: PropTypes.string.isRequired,
};
