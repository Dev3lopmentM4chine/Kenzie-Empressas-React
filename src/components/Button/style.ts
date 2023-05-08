import styled, { css } from "styled-components";
import { StyledButtonProps } from "./interfaces";

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  height: 48px;

  border: 1px solid;
  font-size: var(--font-size-6);
  font-weight: 600;
  cursor: pointer;

  :hover {
    transition: 0.4s;
    opacity: 0.7;
  }

  ${({ styledSize }) => {
    switch (styledSize) {
      case "medium":
        return css`
          max-width: 157px;
        `;

      case "large":
        return css`
          max-width: 422px;
        `;

      default:
        return css`
          max-width: 149.22px;
        `;
    }
  }}

  ${({ styledColor }) => {
    switch (styledColor) {
      case "blue":
        return css`
          color: var(--color-white);
          background-color: var(--color-brand-100);
          border-color: var(--color-brand-100);
        `;

      case "green":
        return css`
          color: var(--color-white);
          background-color: var(--color-sucess);
          border-color: var(--color-sucess);
        `;

      default:
        return css`
          color: var(--color-brand-100);
          background-color: var(--color-white);
          border-color: var(--color-brand-100);
        `;
    }
  }}
`;

export default StyledButton;
