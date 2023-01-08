import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 5vw;
  z-index: 1;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const DivHeader = styled.div`
  width: 85%;
  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content img {
    width: 9vw;
  }
  .content nav {
    display: flex;
    gap: 4.7vw;
  }
  .link {
    background-color: transparent;
    text-decoration: none;
    color: var(--white);
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;
  }
  .link:hover {
    color: var(--primary-color);
  }
  .login {
    font-weight: bold;
    text-decoration: none;
    position: relative;
    display: flex;
    background-color: transparent;
    text-decoration: none;
    color: var(--white);
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;
    font-family: 'Norse', sans-serif;
    :after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--white);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    :hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    .login {
      color: var(--white);
    }
  }
  .login-register {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .btn {
    border: none;
    outline: none;
    color: var(--white);
    font-family: inherit;
    cursor: pointer;
    position: relative;
    z-index: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    padding: 20px 24px;
    gap: 10px;
    width: 163px;
    height: 56px;
    background: var(--gradient-color);
    border-radius: 6px;
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
  .btn:active:after {
    background: transparent;
  }
  .btn:active {
    font-weight: bold;
  }
`;
