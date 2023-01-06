display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  width: 320px;
  height: 280px;
  background-color: var(--grey-5);
  overflow: hidden;
  border: 1px solid var(--grey-6);
  border-radius: 3px;
  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 310px;
  }
  .card-img {
    width: 100%;
  }
  .card-details {
    padding: 10px 10px;
  }
  .text-title {
    font-size: 24px;
    font-weight: bold;
    color: var(--white);
  }
  .text-title span {
    font-size: 24px;
    font-weight: bold;
    color: var(--white);
    text-transform:capitalize;
  }
  .card:hover {
    border-color: var(--primary-color);
  }
`;