import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 76.8px);
  background-color: var(--quinternary-color);
`;

export const DivOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--gradient-color);
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: 178px;
  }
  .content-left .title {
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    color: var(--white);
  }
  .content-left .paragrafh {
    width: 570px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--quartenary-color);
  }
  .content-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .content-right div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:center;
  }
  .error {
    width: 90%;
    padding: 8.5px 0;
    color: var(--quartenary-color);
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  }
  .no-error {
    width: 90%;
    min-height: 30px;
  }
  .content-right input {
    width: 282px;
    height: 56px;
    padding: 18px 24px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: rgba(5, 10, 18, 0.6);
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    outline: none;
    box-shadow: none;
    border: none;
    font-family: "Norse", sans-serif;
  }
  .content-right button {
    padding: 20px 24px;
    border: none;
    outline: none;
    color: var(--white);
    font-family: inherit;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    width: 222px;
    height: 56px;
  }
  .content-right button:after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--gradient-color-1);
    left: 0;
    top: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .content-right button:before {
    content: "";
    background: var(--gradient-color-animation-1);
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
  .content-right button:hover::before {
    opacity: 1;
  }
  .content-right button:active {
    font-weight: bold;
  }
`;

export const DivTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 100%;
  .content-left {
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 30%;
    gap: 30px;
  }
  .content-left img {
    width: 30%;
    height: auto;
  }
  .content-left p {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey-2);
  }
  .content-left div {
    display: flex;
    gap: 10px;
  }
  .content-left ul {
    display: inline-flex;
    list-style: none;
    gap: 10px;
  }
  .content-left ul button {
    background: var(--grey-0);
    color: var(--primary-color);
    border-radius: 50%;
    outline: none;
    border: none;
    gap: 20px;
    width: 34px;
    height: 34px;
    font-size: 18px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .content-left ul button:hover {
    background: var(--gradient-color);
    color: var(--white);
  }
  .content-right {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 70%;
    height: 50%;
    gap: 30px;
  }
  .content-right div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .content-right div p {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: var(--white);
  }
  .content-right div .link {
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: var(--grey-2);
  }
`;

export const DivTree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 10%;
  border-top: 1px solid var(--grey-4);
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: var(--grey-2);
  }
`;
