import styled from "styled-components";

export const StyledCollectionsSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin: 20px 0;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    width: 100%;
    overflow-y: scroll;
  }
`;
