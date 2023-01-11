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
  img {
    width: 50px;
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
  .btn-top-collections {
    border: none;
    outline: none;
    color: var(--white);
    font-family: inherit;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 6px;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    width: 132px;
    height: 100%;
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .btn-top-collections:after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--gradient-color);
    left: 0;
    top: 0;
    border-radius: 6px;
  }
  .btn-top-collections:before {
    content: "";
    background: var(--gradient-color-animation);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(8px);
    animation: glowing 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
    opacity: 0;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  .btn-top-collections:hover::before {
    opacity: 1;
  }
  .btn-top-collections:active {
    font-weight: bold;
  }
`;
