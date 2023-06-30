import styled from "styled-components";

export const StyledAboutSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  .container {
    display: flex;
    justify-content: center;
    width: 85%;
  }
  .container img {
    width: 100%;
    height: max-content;
  }
  .container-right {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: auto;
    gap: 32px;
  }
  .container-right h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: var(--white);
  }
  .container-right span {
    background: var(--primary-color);
    background: var(--gradient-color-animation);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .container-right .title {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--white);
    text-decoration: underline;
  }
  .container-right p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--white);
    opacity: 0.7;
  }
  .container-left {
    width: 65%;
    height: 100%;
  }
  .container-left img {
    width: 90%;
    height: max-content;
  }
`;
