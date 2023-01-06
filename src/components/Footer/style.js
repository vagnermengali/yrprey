import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-5);
`;

export const DivOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
  background: var(--gradient-color);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
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
  }
  .content-right input {
    width: 282px;
    height: 56px;
    padding: 18px 24px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: rgba(5, 10, 18, 0.6);
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    outline: none;
    box-shadow: none;
    border: none;
  }
  .content-right button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 24px;
    gap: 4px;
    width: 182px;
    height: 56px;
    background: var(--black);
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    color: var(--white);
    cursor: pointer;
    border: none;

    :hover {
      background: var(--grey-0);
    }
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
    background: var(--grey-0);
    color: var(--primary-color);
    border-radius: 50%;
    outline: none;
    border: none;
    gap: 20px;
    width: 34px;
    height: 34px;
    font-size: 18px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .content-left ul button:hover {
    background: var(--gradient-color);
    color: var(--white);
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
