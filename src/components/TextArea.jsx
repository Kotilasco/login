/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import React from "react";

const shapes = {
  round: "rounded-[5px]",
};

const variants = {
  tarFillWhiteA700: "bg-white-a700",
};

const sizes = {
  xs: "h-[208px] p-6 text-[20px]",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "xs",
      variant = "tarFillWhiteA700",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e.target.value);
    };

    const shapeClass = shape ? shapes[shape] : "";
    const sizeClass = size ? sizes[size] : "";
    const variantClass = variant ? variants[variant] : "";

    return (
      <textarea
        ref={ref}
        className={`${className} ${shapeClass} ${sizeClass} ${variantClass}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarFillWhiteA700"]),
};

export default TextArea;
