import styled from "styled-components";
import background_contact from "../../../assets/image/backgrounds/background-contact.svg";

export const StyledContactSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background_contact});
  background-repeat: no-repeat;
  background-size: cover;
`;
