import { iButtonProps } from "./interfaces";
import StyledButton from "./style";

const Button = ({
  children,
  onClick,
  type,
  styledColor,
  styledSize,
}: iButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      styledColor={styledColor}
      styledSize={styledSize}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
