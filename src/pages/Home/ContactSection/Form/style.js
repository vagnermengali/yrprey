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
    background: var(--gradient-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 13px;
    line-height: 13px;
  }
  .error-row {
    width: 100%;
    padding: 8.5px 0;
    background: var(--gradient-color);
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
    width: 90%;
    height: 56px;
    margin-top: 30px;
    box-sizing: border-box;
    border-radius: 2px;
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
    font-weight: bold;
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
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
