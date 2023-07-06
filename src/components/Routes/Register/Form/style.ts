import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  .container-input{
    display:flex;
    flex-direction:column;
    gap:15px;
  }
  .container-button{
    display:flex;
    align-items:center;
    gap:45px;
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
    text-decoration:none;
    :hover {
      color: var(--secondary-color);
    }
  }
  .link-signup {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: var(--primary-color);
    text-decoration:none;
    margin-top:30px;
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
  p {
    font-weight: 500;
    font-size: 13px;
    line-height: 26px;
    color: var(--grey-2);
  }
  .fictitious-terms {
    font-weight: 500;
    font-size: 13px;
    line-height: 26px;
    color: var(--primary-color);
  }
  .btn-sign-up, .btn-sign-up:not(:hover) {
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

    .btn-sign-up-inside, .btn-sign-up-inside:not(:hover) {
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

  .btn-sign-up-inside:active {
    transform: scale(0.985);
  }
  .btn-sign-up:hover {
    border: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }
  .btn-sign-up:hover .btn-sign-up-inside {
    background: var(--gradient-color-4);
    color: var(--white);
    border: outset var(--primary-color) 6px;
  }
`;
