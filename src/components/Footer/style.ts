import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 76.8px);
  background-color: var(--quinternary-color);
`;

export const DivOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--gradient-color);
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: 178px;
  }
  .content-left .title {
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    color: var(--white);
  }
  .content-left .paragrafh {
    width: 570px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--quartenary-color);
  }
  .content-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .content-right div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:center;
  }
  .error {
    width: 90%;
    padding: 8.5px 0;
    color: var(--quartenary-color);
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  }
  .no-error {
    width: 90%;
    min-height: 30px;
  }
  .input-subscribe, .input-subscribe:not(:hover) {
    width: 282px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: outset var(--tertiary-color) 3px;
    border-right: none;
    border-top: outset var(--tertiary-color) 3px;
    border-bottom: outset var(--tertiary-color) 3px;
    padding: 0;
    margin: 0;
    transition: all ease .3s;
  }

  .input-subscribe:hover {
    border-right:none;
    border-left: outset var(--quartenary-color) 3px;
    border-top: outset var(--quartenary-color) 3px;
    border-bottom: outset var(--quartenary-color) 3px;
  }

  .input-subscribe:hover .input-subscribe-inside{
    border-left:outset var(--grey-2) 6px;
    border-right: none;
    border-top: outset var(--white) 6px;
    border-bottom: outset var(--white) 6px;
    background: var(--gradient-color-6);
    backdrop-filter: brightness(0%);
  }

  .input-subscribe-inside, .input-subscribe-inside:not(:hover) {
    border: outset var(--grey-8) 6px;
    border-left:outset var(--grey-2) 6px;
    border-right: none;
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

  .input-subscribe-inside::placeholder {
      color: var(--grey-4);
  }
  
  .btn-subscribe, .btn-subscribe:not(:hover) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 222px;
    height: 60px;
    border-left:none;
    border-right: outset var(--tertiary-color) 3px;
    border-top: outset var(--tertiary-color) 3px;
    border-bottom: outset var(--tertiary-color) 3px;
    background: var(--gradient-color-2);
    padding: 0;
    margin: 0;
    transition: all ease .3s;
  }

  .btn-subscribe:hover {
    border-left:none;
    border-right: outset var(--quartenary-color) 3px;
    border-top: outset var(--quartenary-color) 3px;
    border-bottom: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }

  .btn-subscribe:hover .btn-subscribe-inside {
    background: var(--gradient-color-4);
    color: var(--white);
    border-left:none;
    border-right: outset var(--primary-color) 6px;
    border-top: outset var(--primary-color) 6px;
    border-bottom: outset var(--primary-color) 6px;
  }

  .btn-subscribe-inside, .btn-subscribe-inside:not(:hover) {
    border-left:none;
    border-right: outset var(--septenary-color) 6px;
    border-top: outset var(--septenary-color) 6px;
    border-bottom: outset var(--septenary-color) 6px;
    background: var(--gradient-color-2);
    width: calc(222px - 6px);
    height: calc(60px - 6px);
    outline: none;
    color: var(--white);
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Norse', sans-serif;
    transition: all ease .3s;
  }

  .btn-subscribe-inside:active {
    transform: scale(0.985);
  }
`;

export const DivTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 100%;
  .content-left {
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 30%;
    gap: 30px;
  }
  .content-left img {
    width: 30%;
    height: auto;
  }
  .content-left p {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey-2);
  }
  .content-left div {
    display: flex;
    gap: 10px;
  }
  .content-left ul {
    display: inline-flex;
    list-style: none;
    gap: 10px;
  }
  .content-left ul button {
    background: var(--gradient-color-3);
    color: var(--quinternary-color);
    border-radius: 50%;
    outline: none;
    border: outset var(--tertiary-color) 3px;
    gap: 20px;
    width: 34px;
    height: 34px;
    font-size: 18px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all ease .3s;
  }

  .content-left ul button:active {
    transform: scale(0.95);
  }

  .content-left ul button:hover {
    background: var(--gradient-color-3);
    color: var(--white);
    border: outset var(--quartenary-color) 3px;
  }
  .content-right {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 70%;
    height: 50%;
    gap: 30px;
  }
  .content-right div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .content-right div p {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: var(--white);
  }
  .content-right div .link {
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: var(--grey-2);
    transition: all ease .3s;
  }
  .content-right div .link:hover {
    color: var(--quartenary-color);
  }
`;

export const DivTree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 10%;
  border-top: 1px solid var(--grey-4);
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: var(--grey-2);
  }
`;
