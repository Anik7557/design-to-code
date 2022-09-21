import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[62px] xl:text-[71px] text-[80px] 3xl:text-[96px]",
  h2: "lg:text-[49px] xl:text-[56px] text-[64px] 3xl:text-[76px]",
  h3: "font-extrabold lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px]",
  h4: "lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h5: "font-black lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px]",
  h6: "lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  body1:
    "font-bold lg:text-[171px] xl:text-[195px] text-[220px] 3xl:text-[264px]",
  body2:
    "font-bold lg:text-[17px] xl:text-[19px] text-[22.11px] 2xl:text-[22px] 3xl:text-[26px]",
  body3:
    "font-normal lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  body4:
    "font-normal lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px]",
  body5: "lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px]",
  body6: "font-bold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
