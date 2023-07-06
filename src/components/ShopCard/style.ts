import styled from "styled-components";

export const StyledCardShop = styled.div`
  .card-container-shop {
    background-color: transparent;
    width: 258px;
    height: 258px;
    perspective: 1000px;
    list-style: none;
  }
  .card-container-shop:hover .flip-card-inner{
    transform: rotateY(180deg);
  }
  .img-card-shop {
    width: 100%;
    height: 100%;
  }
  .text-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 5px;
  }
  .text-content div {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .text-title {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: var(--tertiary-color);
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  .text-title span {
    font-size: 18px;
    font-weight: bold;
    color: var(--tertiary-color);
    display: flex;
    align-items: center;
  }
  .text-name-item {
    color: var(--grey-2);
    font-size: 16px;
  }
  .text-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .text-details p:first-child {
    color: var(--grey-2);
    font-size: 16px;
  }
  .text-details p:last-child {
    font-size: 26px;
  }
  .container-button {
    width: 100%;
    height: min-content;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
  }
  .checked {
    color: var(--tertiary-color);
  }
  .eth {
    font-size: 18px;
    font-weight: bold;
    color: var(--grey-1);
  }
  .btc {
    color: var(--orange-1);
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .flip-card-front {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid var(--grey-6);
    border-radius: 3px;
    color: var(--white);
  }
  .flip-card-front {
    background-color: var(--transparent);
  }
  .flip-card-front div {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
    border-radius: 3px;
  }
  .flip-card-front div img {
    width: 100%;
  }
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid var(--grey-6);
    border-radius: 3px;
    color: var(--white);
    padding: 30px 20px;
    gap: 10px;
  }
  .flip-card-back {
    background-color: var(--transparent);
    transform: rotateY(180deg);
  }
  .btn-puschase-item, .btn-puschase-item:not(:hover) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    border: outset var(--tertiary-color) 3px;
    background: var(--gradient-color-2);
    padding: 0;
    margin: 0;
    transition: all ease .3s;
  }

    .btn-puschase-item-inside, .btn-puschase-item-inside:not(:hover) {
    border: outset var(--septenary-color) 6px;
    background: var(--gradient-color-2);
    width: 100%;
    height: calc(45px - 6px);
    outline: none;
    color: var(--white);
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Norse', sans-serif;
  }

  .btn-puschase-item-inside:active {
    transform: scale(0.985);
  }
  .btn-puschase-item:hover {
    border: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }
  .btn-puschase-item:hover .btn-puschase-item-inside {
    background: var(--gradient-color-4);
    color: var(--white);
    border: outset var(--primary-color) 6px;
  }
`;
