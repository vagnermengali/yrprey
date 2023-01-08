import styled from "styled-components";
import background_home from "../../../assets/image/backgrounds/background-home.svg";

export const StyledInitialSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background_home});
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    display: flex;
    justify-content: center;
    width: 85%;
  }
  .container img {
    width: 100%;
    height: max-content;
  }
  .container-left {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    gap: 32px;
  }
  .container-left h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 65px;
    color: var(--white);
  }
  .container-left span {
    background: var(--gradient-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .container-left p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--white);
    opacity: 0.7;
  }
  .container-left .btn {
    padding: 20px 24px;
    border: none;
    outline: none;
    color: var(--white);
    font-family: inherit;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    width: 222px;
    height: 56px;
  }
  .btn:after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--gradient-color);
    left: 0;
    top: 0;
    border-radius: 6px;
  }
  .btn:before {
    content: "";
    background: var(--gradient-color-animation);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(8px);
    animation: glowing 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
    opacity: 0;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  .btn:hover::before {
    opacity: 1;
  }
  .btn:active {
    font-weight: bold;
  }
  .container-right {
    width: 65%;
    height: 100%;
  }
  .container-right .image {
    width: 100%;
    height: max-content;
    animation: shakeY 20s ease-in-out infinite alternate-reverse both;
  }
`;
