import styled from "styled-components";

export const StyledMarketingCard = styled.div`
  width: 83%;
  background: var(--grey-0);
  padding: 45px;
  gap: 20px;
  border-radius: 6px;
  animation: shakeY 40s ease-in-out infinite alternate-reverse both;
`;
export const DivMarketingCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: var(--white);
    padding-bottom: 20px;
    text-align: start;
    border-bottom: 1px solid var(--grey-4);
  }
  p {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-align: start;
    color: var(--grey-2);
    gap: 10px;
  }
  .icon {
    color: var(--primary-color);
  }
`;
