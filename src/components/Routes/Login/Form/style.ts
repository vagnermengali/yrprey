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
  .link, .link:not(:hover) {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: var(--primary-color);
    text-decoration: none;
    transition: all ease .3s;
  }
  .link:hover {
      color: var(--quartenary-color);
  }
  .link-signup, .link-signup:not(:hover) {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: var(--primary-color);
    text-decoration: none;
    margin-top: 30px;
    transition: all ease .3s;
  }

  .link-signup:hover {
      color: var(--quartenary-color);
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

  .input-email, .input-email:not(:hover) {
    width: 50%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: outset var(--tertiary-color) 3px;
    padding: 0;
    margin: 0;
    transition: all ease .3s;
  }

  .input-email:hover, .input-email:focus {
    border: outset var(--quartenary-color) 3px;
  }

  .input-email:hover .input-email-inside, .input-email:focus .input-email-inside{
    border-left:outset var(--grey-2) 6px;
    border-top: outset var(--white) 6px;
    border-top: outset var(--white) 6px;
    border-bottom: outset var(--white) 6px;
    background: var(--gradient-color-6);
    backdrop-filter: brightness(0%);
  }

  .input-email-inside, .input-email-inside:not(:hover) {
    border: outset var(--grey-8) 6px;
    border-left:outset var(--grey-2) 6px;
    border-left:outset var(--grey-2) 6px;
    border-top: outset var(--grey-8) 6px;
    border-bottom: outset var(--grey-8) 6px;
    background: var(--gradient-color-5);
    width: 100%;
    padding-left: 20px;
    height: calc(60px - 6px);
    outline: none;
    color: var(--grey-4);
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Norse', sans-serif;
    transition: all ease .3s;
  }

  .input-email-inside::placeholder {
      color: var(--grey-4);
  }

  .input-password, .input-password:not(:hover) {
    width: 50%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: outset var(--tertiary-color) 3px;
    padding: 0;
    margin: 0;
    transition: all ease .3s;
  }

  .input-password:hover, .input-password:focus {
    border: outset var(--quartenary-color) 3px;
  }

  .input-password:hover .input-password-inside,
  .input-password:focus .input-password-inside{
    border-left:outset var(--grey-2) 6px;
    border-top: outset var(--white) 6px;
    border-top: outset var(--white) 6px;
    border-bottom: outset var(--white) 6px;
    background: var(--gradient-color-6);
    backdrop-filter: brightness(0%);
  }

  .input-password-inside, .input-password-inside:not(:hover) {
    border: outset var(--grey-8) 6px;
    border-left:outset var(--grey-2) 6px;
    border-left:outset var(--grey-2) 6px;
    border-top: outset var(--grey-8) 6px;
    border-bottom: outset var(--grey-8) 6px;
    background: var(--gradient-color-5);
    width: 100%;
    padding-left: 20px;
    height: calc(60px - 6px);
    outline: none;
    color: var(--grey-4);
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Norse', sans-serif;
    transition: all ease .3s;
  }

  .input-password-inside::placeholder {
      color: var(--grey-4);
  }

  .btn-login, .btn-login:not(:hover) {
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
    margin-top: 30px;
  }

    .btn-login-inside, .btn-login-inside:not(:hover) {
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

  .btn-login-inside:active {
    transform: scale(0.985);
  }
  .btn-login:hover {
    border: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }
  .btn-login:hover .btn-login-inside {
    background: var(--gradient-color-4);
    color: var(--white);
    border: outset var(--primary-color) 6px;
  }
`;
