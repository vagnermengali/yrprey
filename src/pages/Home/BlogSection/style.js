import styled from "styled-components";
import background_blog from "../../../assets/image/backgrounds/background-blog.svg";

export const StyledBlogSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background_blog});
  background-repeat: no-repeat;
  background-size: cover;
`;
