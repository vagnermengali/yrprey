import styled from "styled-components";

export const StyledThirdTab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey-2);
    text-align: justify;
  }
  .link {
    color: var(--primary-color);
    text-decoration: none;
    :hover {
      color: var(--secondary-color);
      text-decoration: underline;
    }
  }
  .topic {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
  .topic div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .topic .icon {
    width: 20px;
    height: 20px;
    color: var(--primary-color);
  }
  .topic p {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: var(--white);
  }
`;
