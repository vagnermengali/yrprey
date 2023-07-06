import styled from "styled-components";

export const StyledInitialSection = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  .container {
    display: flex;
    justify-content: center;
    width: 85%;
  }
  .container img {
    width: 100%;
    height: max-content;
  }
  .container-left {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    gap: 32px;
  }
  .container-left h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 65px;
    color: var(--white);
    width:400px;
  }
  .container-left span {
    background: var(--gradient-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .container-left p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--white);
    opacity: 0.7;
  }
  .btn-initial, .btn-initial:not(:hover) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 222px;
    height: 60px;
    margin-top: 30px;
    border: outset var(--tertiary-color) 3px;
    background: var(--gradient-color-2);
    padding: 0;
    transition: all ease .3s;
  }

    .btn-initial-inside, .btn-initial-inside:not(:hover) {
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

  .btn-initial-inside:active {
    transform: scale(0.985);
  }

  .btn-initial:hover {
    border: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }

  .btn-initial:hover .btn-initial-inside {
    background: var(--gradient-color-4);
    color: var(--white);
    border: outset var(--primary-color) 6px;
  }

  .container-right {
    display:flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
  }
  .container-right .image {
    width: 80%;
    height: max-content;
    animation: shakeY 20s ease-in-out infinite alternate-reverse both;
  }
`;
