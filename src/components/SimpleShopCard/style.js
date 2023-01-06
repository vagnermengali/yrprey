import styled from "styled-components";

export const StyledCardShopClean = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3px;
    width: 330px;
    height: 378px;
    background: var(--transpaernt);
    overflow: hidden;
    border: 1px solid var(--grey-6);
    border-radius: 3px;
  .card-img {
    width: 100%;
  }
  .card-details {
    padding: 10px 10px;
  }
  .text-title {
    font-size: 1.5em;
    font-weight: bold;
    color: var(--white);
  }
  .card:hover {
    border-color: var(--primary-color);
  }
`;
