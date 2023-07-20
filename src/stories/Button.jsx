import React from "react";
import PropTypes from "prop-types";
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  disabled,
  outline,
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const isOutlined = outline
    ? `btn-outline-${backgroundColor}`
    : `btn-${backgroundColor}`;
  const mode = primary ? "btn-primary" : backgroundColor;
  const isDisabled = disabled ? true : false;
  return (
    <button
      disabled={isDisabled}
      type="button"
      className={`btn ${mode} ${size} ${isOutlined}`}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  backgroundColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]).isRequired,
  size: PropTypes.oneOf(["btn-sm", "btn-lg"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  outline: false,
  backgroundColor: "primary",
  size: "",
  label: "Button",
  onClick: undefined,
  disabled:false,
};
