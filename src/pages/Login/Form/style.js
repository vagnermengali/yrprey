import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  .container-input {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .container-button {
    display: flex;
    align-items: center;
    gap: 45px;
  }
  .label {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: var(--grey-2);
  }
  .link {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: var(--primary-color);
    text-decoration: none;
    :hover {
      color: var(--secondary-color);
    }
  }
  .link-signup {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: var(--primary-color);
    text-decoration: none;
    margin-top: 30px;
    :hover {
      color: var(--secondary-color);
    }
  }
  .error {
    width: 90%;
    padding: 8.5px 0;
    background: var(--quartenary-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 13px;
    line-height: 13px;
  }
  .no-error {
    width: 90%;
    min-height: 30px;
  }
  .input-email {
    box-sizing: border-box;
    width: 65%;
    height: 56px;
    border: 1px solid var(--grey-6);
    border-radius: 2px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    padding-left: 20px;
    background-color: transparent;
    color: var(--grey-2);
    outline: none;
  }
  .input-password {
    box-sizing: border-box;
    width: 65%;
    height: 56px;
    border: 1px solid var(--grey-6);
    border-radius: 2px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    padding-left: 20px;
    background-color: transparent;
    color: var(--grey-2);
    outline: none;
  }
  .btn {
    padding: 20px 24px;
    border: none;
    outline: none;
    color: var(--white);
    font-family: inherit;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 6px;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    width: 30%;
    height: 56px;
    margin-top: 30px;
    box-sizing: border-box;
    border-radius: 20px;
    cursor: pointer;
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
    border-radius: 2px;
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
    color: var(--black);
    font-weight: bold;
  }
`;
