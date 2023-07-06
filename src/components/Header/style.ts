import styled from "styled-components";

interface IHeaderBg {
  scrolled: boolean;
}

export const HeaderContainer = styled.header<IHeaderBg>`
  height: 5rem;
  z-index: 100;
  top: 0;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: background-color 0.5s ease;
  background-color: ${({ scrolled }) => scrolled ? "var(--quinternary-color)" : "tranparent"};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(5px)" : "blur(0px)")};
`;

export const DivHeader = styled.div`
  width: 90%;
  height: min-content;
  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content img {
    width: 8.125rem;
  }
  .content nav {
    display: flex;
    gap: 67.5px;
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
    transition: all ease .3s;
  }
  .link:hover {
    color: var(--quartenary-color);
  }
  .login, .login:not(:hover) {
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
  }
  .login:after, .login::after {
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
    .login:hover {
      color: var(--quartenary-color);
    }
    .login:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
      background-color: var(--quartenary-color);
    }
  .login-register {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .btn-register, .btn-register:not(:hover) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 165px;
    height: 60px;
    border: outset var(--tertiary-color) 3px;
    background: var(--gradient-color-2);
    padding: 0;
    margin: 0;
    transition: all ease .3s;
  }

    .btn-register-inside, .btn-register-inside:not(:hover) {
    border: outset var(--septenary-color) 6px;
    background: var(--gradient-color-2);
    width: calc(165px - 6px);
    height: calc(60px - 6px);
    outline: none;
    color: var(--white);
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Norse', sans-serif;
  }

  .btn-register-inside:active {
    transform: scale(0.985);
  }
  .btn-register:hover {
    border: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }
  .btn-register:hover .btn-register-inside {
    background: var(--gradient-color-4);
    color: var(--white);
    border: outset var(--primary-color) 6px;
  }
`;
