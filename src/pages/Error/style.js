import styled from "styled-components";
import background_error from "../../assets/image/backgrounds/background-error.svg";

export const ContainerSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background_error});
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
  }
  .container-left {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 30px;
  }
  .container-left h1 {
    color: var(--white);
    font-size: 48px;
    font-weight: 800;
    line-height: 1.22;
    letter-spacing: 0;
    text-transform: none;
    gap: 30px;
  }
  .container-left .div-links {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 70%;
  }
  .container-left .div-links p {
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
    position: relative;
    color: var(--white);
  }
  .link {
    display: flex;
    color: var(--secondary-color);
    font-weight: bold;
    text-decoration: none;
    position: relative;
    font-size: 18px;
    width: max-content;
    :after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--secondary-color);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    :hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  .container-right {
    width: 75%;
    height: 100%;
  }
  .container-right img {
    width: 100%;
    height: 100%;
    height: max-content;
    animation: shakeY 20s ease-in-out infinite alternate-reverse both;
  }
`;
