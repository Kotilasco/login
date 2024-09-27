/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { forwardRef } from "react";

const variants = {
  primary: "checked: border-[3px]",
};

const sizes = {
  xs: "h-[12px] w-[12px]",
};

const CheckBox = forwardRef(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e.target.checked);
    };

    return (
      <div
        className={`${className} flex items-center gap-[5px] cursor-pointer`}
      >
        <input
          className={`${(size && sizes[size]) || ""} ${
            (variant && variants[variant]) || ""
          }`}
          ref={ref}
          type="checkbox"
          name={name}
          onChange={handleChange}
          id={id}
          {...restProps}
        />
        {!!label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }
);

export default CheckBox;
