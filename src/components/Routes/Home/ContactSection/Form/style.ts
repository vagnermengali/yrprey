import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
  .error-column {
    width: 90%;
    padding: 8.5px 0;
    background: var(--quartenary-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 13px;
    line-height: 13px;
  }
  .error-row {
    width: 100%;
    padding: 8.5px 0;
    background: var(--quartenary-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 13px;
    line-height: 13px;
  }
  .no-error-column {
    width: 90%;
    min-height: 30px;
  }
  .no-error-row {
    width: 100%;
    min-height: 30px;
  }
  .input-name {
    box-sizing: border-box;
    width: 90%;
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
    font-family: 'Norse', sans-serif;
  }
  .input-subject {
    box-sizing: border-box;
    width: 90%;
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
    font-family: 'Norse', sans-serif;
  }
  textarea {
    box-sizing: border-box;
    width: 90%;
    height: 140px;
    border: 1px solid var(--grey-6);
    color: var(--grey-6);
    border-radius: 2px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    padding: 20px;
    font-family: "bakbakone", sans-serif;
    background-color: transparent;
    color: var(--grey-2);
    outline: none;
    resize: none;
    font-family: 'Norse', sans-serif;
    transition: all ease .3s;
  }
  .btn-send-message, .btn-send-message:not(:hover) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 60px;
    margin-top: 30px;
    border: outset var(--tertiary-color) 3px;
    background: var(--gradient-color-2);
    padding: 0;
    transition: all ease .3s;
  }

    .btn-send-message-inside, .btn-send-message-inside:not(:hover) {
    border: outset var(--septenary-color) 6px;
    background: var(--gradient-color-2);
    width: 100%;
    height: calc(60px - 6px);
    outline: none;
    color: var(--white);
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Norse', sans-serif;
  }

  .btn-send-message-inside:active {
    transform: scale(0.985);
  }

  .btn-send-message:hover {
    border: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }

  .btn-send-message:hover .btn-send-message-inside {
    background: var(--gradient-color-4);
    color: var(--white);
    border: outset var(--primary-color) 6px;
  }

  .input-contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    gap: 20px;
  }
  .input-contact div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
  .input-contact div input {
    box-sizing: border-box;
    width: 100%;
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
    font-family: 'Norse', sans-serif;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
