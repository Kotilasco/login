/* eslint-disable react/prop-types */

const shapes = {
  round: "rounded-[18px]",
};

const variants = {
  fill: {
    green_500_01: "bg-green-500_01 text-white-a700",
    green_500: "bg-green-500 text-white-a700",
  },
  outline: {
    black_900_01: "border-black-900_01 border border-solid text-black-900_01",
  },
};

const sizes = {
  sm: "h-[56px] px-[34px] text-[20px]",
  md: "h-[60px] px-[34px] text-[25px]",
  xs: "h-[38px] px-5 text-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "green_500",
  ...restProps
}) => {
  console.log("hie");
  console.log(
    `${className} flex flex-row ... ${variant && variants[variant]?.[color]}`
  );
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]}
      ${
        variant && variants[variant]?.[color]
          ? variants[variant][color]
          : variants.fill.green_500
      }
      `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export default Button;
