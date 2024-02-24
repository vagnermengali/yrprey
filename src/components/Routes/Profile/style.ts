import styled from "styled-components";

export const StyledProfileSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 40px 85px 40px;
 
  .container {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
  }
  .container-input {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: fit-content;
  }
  .label {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: var(--grey-2);
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

  .input, .input:not(:hover) {
    width: 340px;
    height: 60px;
    padding-left: 20px;
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Gilroy', sans-serif;
    transition: all ease .3s;
    border: 1px solid var(--tertiary-color);
    border-radius: 2px;
    background-color: transparent;
    color: var(--grey-2);
  }

  .input::placeholder {
    color: var(--grey-2);
  }

  .btn {
  border: none;
  outline: none;
  color: #fff;
  background: var(--gradient-color);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 4px;
  margin: 30px auto 0 auto;
  width: 165px;
  height: 56px;
  font: normal 700 16px/16px 'Gilroy', sans-serif;
}

.btn:before {
  content: '';
  background: var(--gradient-color-animation);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  border-radius: 4px;
}

.btn:active:after {
  background: transparent;
}

.btn:hover:before {
  opacity: 1;
}

.btn:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--gradient-color);
  left: 0;
  top: 0;
  border-radius: 4px;
}

.input:disabled {
  cursor:not-allowed;
  border: 1px solid var(--grey-6);
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
`;