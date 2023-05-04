import styled from "styled-components";
import background_login from "@/assets/image/backgrounds/background-register.svg";

export const StyledRegisterSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background_login});
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    display: flex;
    justify-content: center;
    width: 85%;
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
  .title-details {
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
    align-items: center;
    flex-direction: column;
    width: 50%;
  }
`;
