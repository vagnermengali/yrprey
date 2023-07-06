import styled from "styled-components";

export const StyledTableCollection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: var(--grey-2);
  .content-table {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .scope-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 78px;
    padding: 15px 30px;
  }
  .scope-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 87%;
    gap: 50px;
  }
  .scope-content p {
    width: 33.333333333333%;
  }
  .container-img {
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
  }
  .img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
  .table-content {
    width: 100%;
  }
  .card-table {
    width: 87%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
  .card-table-static {
    width: 33.333333333333%;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 78px;
    padding: 15px 30px;
    border-bottom: 0.5px solid var(--grey-4);
    border-top: 0.5px solid var(--grey-4);
  }
  .collection-details {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 33.333333333333%;
  }
  .collection-details p {
  }
  .collection-details div {
    padding: 0 10px;
  }
  .collection-details h2 {
    display: flex;
    align-items: center;
    font-weight: 700;
    width: 65%;
  }
  .collection-details img {
  }
  .collection-details span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .checked {
    color: var(--tertiary-color);
  }
  .eth {
    color: var(--grey-1);
  }
  .btc {
    color: var(--orange-1);
  }
  .btn-top-collections, .btn-top-collections:not(:hover){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 132px;
    height: 60px;
    border: outset var(--tertiary-color) 3px;
    background: var(--gradient-color-2);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: all ease .3s;
    text-decoration: none;
    text-transform: none;
  }

  .btn-top-collections:hover {
    border: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }

  .btn-top-collections:hover .btn-top-collections-inside{
    background: var(--gradient-color-4);
    color: var(--white);
    border: outset var(--primary-color) 6px;
  }

  .btn-top-collections-inside, .btn-top-collections-inside:not(:hover) {
    border: outset var(--septenary-color) 6px;
    background: var(--gradient-color-2);
    width: calc(132px - 6px);
    height: calc(60px - 6px);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    cursor: pointer;
    z-index: 0;
    font-size: 29px;
    transition: all ease .3s;
    font: normal 700 16px/16px 'Norse', sans-serif;
  }

  .btn-top-collections-inside:active {
    transform: scale(0.95);
  }
`;
