import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCart = styled(motion.div)`
  .cart-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    right:0;
    background: #88583f37;
    backdrop-filter: blur( .5px );
    -webkit-backdrop-filter: blur( .5px );
    z-index: 999;
  }

  .cart {
      width: 375px;
      min-height: 100vh;
      background-color: var(--senary-color);
      position: fixed;
      top: 0;
      right:0;
      z-index: 1000;
  }

  .header-cart {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 20px;
    border-bottom: 1px solid var(--nonary-color);
    background-color: var(--quinternary-color);
  }

  .header-cart h1 {
    color: var(--white);
    font-size: 24px;
    font-weight: 700;
  }

  .close-cart {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .list-cart {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 25px 20px;
  }

  .footer-cart {
    position: fixed;
    bottom: 0;
    right:0;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 20px;
    gap: 10px;
    border-top: 1px solid var(--nonary-color);
    background-color: var(--quinternary-color);
  }

  .footer-cart .footer-cart-price {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 10px 0;
  }

  .footer-cart .footer-cart-price p:first-child {
    font-size: 20px;
    font-weight: 700;
    color: var(--white);
  }

  .footer-cart .footer-cart-price p:last-child {
    font-size: 20px;
    font-weight: 700;
    color: var(--quartenary-color);
  }

  .footer-cart-button-finish, .footer-cart-button-finish:not(:hover) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    border: outset var(--tertiary-color) 3px;
    background: var(--gradient-color-2);
    padding: 0;
    margin: 0;
    transition: all ease .3s;
  }

  .footer-cart-button-finish-inside, .footer-cart-button-finish-inside:not(:hover) {
    border: outset var(--septenary-color) 6px;
    background: var(--gradient-color-2);
    width: 100%;
    height: calc(50px - 6px);
    outline: none;
    color: var(--white);
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Norse', sans-serif;
  }

  .footer-cart-button-finish-inside:active {
    transform: scale(0.985);
  }

  .footer-cart-button-finish:hover {
    border: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }

  .footer-cart-button-finish:hover .footer-cart-button-finish-inside {
    background: var(--gradient-color-4);
    color: var(--white);
    border: outset var(--primary-color) 6px;
  }
  
  .footer-cart-button-continue, .footer-cart-button-continue:not(:hover) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    border: outset var(--grey-2) 3px;
    background: var(--gradient-color-7);
    padding: 0;
    margin: 0;
    transition: all ease .3s;
  }

  .footer-cart-button-continue-inside, .footer-cart-button-continue-inside:not(:hover) {
    border: outset var(--grey-5) 6px;
    background: var(--gradient-color-8);
    width: 100%;
    height: calc(50px - 6px);
    outline: none;
    color: var(--white);
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Norse', sans-serif;
  }

  .footer-cart-button-continue-inside:active {
    transform: scale(0.985);
  }

  .footer-cart-button-continue:hover {
    border: outset var(--grey-9) 3px;
    background: var(--gradient-color-2);
  }

  .footer-cart-button-continue:hover .footer-cart-button-continue-inside {
    background: var(--gradient-color-7);
    color: var(--white);
    border: outset var(--grey-3) 6px;
  }
`;
