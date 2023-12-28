import styled from "styled-components";

export const StyledAboutSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
  }
  .content {
    display: flex;
    flex-direction: column;

    gap: 30px;
  }
  .content h1 {
    color: var(--white);
    font-size: 48px;
    font-weight: 800;
    line-height: 1.22;
    letter-spacing: 0;
    text-transform: none;
    gap: 30px;
  }
`;
