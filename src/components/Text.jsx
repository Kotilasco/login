/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const sizes = {
  textxs: "text-[15px] font-normal not-italic",
  texts: "text-[16px] font-normal not-italic",
  textmd: "text-[18px] font-normal not-italic",
  textxl: "text-[20px] font-normal not-italic",
};

const Text = ({
  children,
  className = "",
  as,
  size = "texts",
  ...restprops
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-black-900_01 font-poppins ${className} ${sizes[size]}`}
      {...restprops}
    >
      {children}
    </Component>
  );
};

export default Text;
