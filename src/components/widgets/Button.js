import React from "react";
import PropTypes from "prop-types";

const Button = ({
  title,
  id,
  name,
  type,
  disabled,
  onClick,
  className,
  icon,
}) => {
  const defaultButtonClasses =
    "bg-appGreen text-white py-2 px-5 w-full rounded-3xl";
  const buttonClasses = className
    ? `${defaultButtonClasses} ${className}`
    : defaultButtonClasses;

  const disabledStyles = disabled
    ? "bg-gray-300 text-gray-700 cursor-not-allowed"
    : "bg-blue text-white";

  return (
    <button
      className={`${buttonClasses} ${disabledStyles}`}
      id={id}
      name={name}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className="font-semibold text-lg">{title}</span>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.node,
};

export default Button;