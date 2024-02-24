import styled from "styled-components";

export const StyledCollectionsSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 20px 0;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;
