import styled, { css } from "styled-components";

const StyledCardCompany = styled.div`
  height: 211px;
  width: 100%;
  max-width: 241px;

  border-bottom: 1px solid var(--color-brand-100);
  background-color: var(--color-white);
  padding-left: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    font-size: var(--font-size-5);
    color: var(--color-black);
    font-weight: var(--font-weight-3);
  }

  .cardCompany-container {
    height: 65px;
    width: 100%;
    max-width: 93px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cardCompany-container p {
    font-size: var(--font-size-8);
    color: var(--color-black);
    font-weight: var(--font-weight-0);
  }
  .cardCompany-container div {
    height: 32px;
    width: 100%;
    max-width: 93px;

    border-radius: 255px;
    border: 1px solid var(--color-brand-100);
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cardCompany-container div span {
    font-size: var(--font-size-8);
    color: var(--color-brand-100);
    font-weight: var(--font-weight-0);
  }

  @media screen and (min-width: 800px) {
    height: 134px;
    max-width: 489px;
  }
`;

export default StyledCardCompany;
