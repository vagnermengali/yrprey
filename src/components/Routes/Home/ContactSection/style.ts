import styled from "styled-components";

export const StyledContactSection = styled.div`
  width: 100%;
  height: auto;
  padding: 45px 0 70px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  .container {
    display: flex;
    justify-content: center;
    width: 85%;
  }
  .container-left {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 50%;
    gap: 70px;
  }
  .container-left .content-up {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .container-left .content-up .title {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    text-decoration-line: underline;
    color: var(--grey-2);
  }
  .container-left .content-up h5 {
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: var(--white);
  }
  .container-left .content-up span {
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    background: var(--gradient-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .container-left .content-up p {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey-2);
    width:80%;
  }
  .content-down {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .contact {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
  .contact button {
    background: var(--gradient-color-3);
    color: var(--white);
    border-radius: 50%;
    outline: none;
    gap: 20px;
    width: 56px;
    height: 56px;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0 ;
  }
  
  .contact div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .contact .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: var(--white);
  }
  .details {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: var(--grey-2);
  }
  .container-right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
  }
`;
