import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder44: "rounded-radius44",
  CircleBorder35: "rounded-radius35",
  RoundedBorder12: "rounded-radius12",
};
const variants = {
  icbFillGray900: "bg-gray_900",
  icbFillGray400: "bg-gray_400",
  FillWhiteA700: "bg-white_A700 text-black_900",
  FillBlueA100: "bg-blue_A100 text-blue_50",
  FillYellowA400: "bg-yellow_A400 text-gray_800",
};
const sizes = {
  smIcn: "lg:p-[21px] xl:p-[24px] p-[27px] 3xl:p-[32px]",
  sm: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  md: "lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder44",
    "CircleBorder35",
    "RoundedBorder12",
  ]),
  variant: PropTypes.oneOf([
    "icbFillGray900",
    "icbFillGray400",
    "FillWhiteA700",
    "FillBlueA100",
    "FillYellowA400",
  ]),
  size: PropTypes.oneOf(["smIcn", "sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbCircleBorder44",
  variant: "icbFillGray900",
  size: "smIcn",
};

export { Button };
