import styled from "styled-components";

export const StyledShopSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container-shop {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
  .title-shop {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    text-decoration-line: underline;
    color: var(--white);
  }
  h3 {
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    text-align: center;
    color: var(--white);
  }
  h3 span {
    background: var(--primary-color);
    background: var(--gradient-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .content-center {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .btn-view-more, .btn-view-more:not(:hover) {
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

  .btn-view-more-inside, .btn-view-more-inside:not(:hover) {
    border: outset var(--septenary-color) 6px;
    background: var(--gradient-color-2);
    width: calc(165px - 6px);
    height: calc(60px - 6px);
    outline: none;
    color: var(--white);
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Norse', sans-serif;
    transition: all ease .3s;
  }

  .btn-view-more:hover {
    border: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }

  .btn-view-more:hover .btn-view-more-inside {
    background: var(--gradient-color-4);
    color: var(--white);
    border: outset var(--primary-color) 6px;
  }

  .btn-view-more-inside:active {
    transform: scale(0.985);
  }
`;
