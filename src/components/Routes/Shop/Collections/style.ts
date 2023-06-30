import styled from "styled-components";
import background_error from "@/assets/image/backgrounds/background-shop-colletion.svg";

export const StyledCollectionsSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${background_error});
  background-repeat: no-repeat;
  background-size: cover;

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
