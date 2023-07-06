import styled from "styled-components";

export const HomeButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 3;
    .btn-top, .btn-top:not(:hover){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: outset var(--tertiary-color) 3px;
    background: var(--gradient-color-2);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: all ease .3s;
  }

  .btn-top:hover {
    border: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }

  .btn-top:hover .btn-top1{
    background: var(--gradient-color-4);
    color: var(--white);
    border: outset var(--primary-color) 6px;
  }

  .btn-top1, .btn-top1:not(:hover) {
    border: outset var(--septenary-color) 6px;
    background: var(--gradient-color-2);
    width: calc(50px - 6px);
    height: calc(50px - 6px);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    cursor: pointer;
    z-index: 0;
    font-size: 29px;
    transition: all ease .3s;
  }

  .btn-top1:active {
    transform: scale(0.95);
  }
`;
