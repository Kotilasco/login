/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { forwardRef } from "react";

const shapes = {
  round: "rounded-[5px]",
};

const variants = {
  fill: {
    gray_200_01: "bg-gray-200_01 text-gray-500",
    white_A700: "bg-white-a700 text-black-900_4c",
  },
};

const sizes = {
  xs: "h-[56px] px-7 text-[20px]",
  sm: "h-[80px] px-6 text-[20px]",
};

const Input = forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    const shapeClass = shape && shapes[shape];
    const variantClass = variant && variants[variant]?.[color];

    return (
      <label
        className={`${className} flex items-center justify-center sm:px-5 cursor-text text-[20px] ${shapeClass} ${variantClass}`}
      >
        {label && <span>{label}</span>}
        {prefix && <span>{prefix}</span>}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className={`${sizes[size]} ${variantClass}`}
          {...restProps}
        />
        {suffix && <span>{suffix}</span>}
      </label>
    );
  }
);

export default Input;
