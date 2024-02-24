import styled from "styled-components";

export const StyledLoginSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;

  .container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 140px 40px;
  }
  .container-left {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 50%;
    gap: 70px;
  }
  .container-left .content-up {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .container-left .content-up h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    color: var(--white);
  }
  .container-left .content-up span {
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    background: var(--gradient-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .container-right {
    display: flex;
    justify-content: center;
    width: 50%;
  }
`;
