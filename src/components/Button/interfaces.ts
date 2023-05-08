import React from "react";

interface iButtonProps {
  children: React.ReactNode;
  onClick?: () => void | any;
  type?: "submit" | "button"
  styledColor?: "blue" | "green" | "white";
  styledSize?: "small" | "medium" | "large";
}

type StyledButtonProps = Omit<iButtonProps, "children" | "onClick" | "type">;

export { iButtonProps, StyledButtonProps };
