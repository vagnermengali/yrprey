import styled from "styled-components";
import background_about from "../../../assets/image/backgrounds/background-about.svg";

export const StyledAboutSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background_about});
  background-repeat: no-repeat;
  background-size: cover;
`;
