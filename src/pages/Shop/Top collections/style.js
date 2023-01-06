import styled from "styled-components";
import background from "../../../assets/image/backgrounds/background-blog.svg";

export const ContainerTopCollections = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    gap: 30px;
  }
  .content-title {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    color: var(--white);
  }
`;
