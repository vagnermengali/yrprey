import styled from "styled-components";

export const HomeButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  margin: 30px;
  padding: auto;
  border: none;
  outline: none;
  color: var(--white);
  font-family: inherit;
  cursor: pointer;
  position: fixed;
  z-index: 3;
  border-radius: 16px;
  font-weight: 700;
  font-size: 46px;
  :after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--gradient-color);
    bottom: 0;
    right: 0;
    border-radius: 6px;
  }
  :before {
    content: "";
    background: var(--gradient-color-animation);
    position: absolute;
    bottom: -2px;
    right: -2px;
    background-size: 600%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(8px);
    animation: glowing 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 6px;
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
  :hover::before {
    opacity: 1;
  }
  :active {
    color: var(--black);
    font-weight: bold;
  }
`;