/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const sizes = {
  textlg: "text-[19px] font-medium",
  text2xl: "text-[25px] font-medium",
  headingxs: "text-[18px] font-bold",
  headings: "text-[20px] font-bold",
  headingmd: "text-[25px] font-bold",
  headinglg: "text-[30px] font-bold",
  headingxl: "text-[34px] font-bold",
  heading2xl: "text-[50px] font-bold",
  heading3xl: "text-[60px] font-bold",
};

const Heading = ({
  children,
  className = "",
  size = "headingxs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-black-900_01 font-poppins ${className} ${sizes[size]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Heading;
