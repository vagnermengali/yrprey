import styled from "styled-components";
import background_error from "../../assets/image/backgrounds/background-blog.svg";

export const StyledBlogSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
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
  }
  .content {
    display: flex;
    flex-direction: column;

    gap: 30px;
  }
  .content h1 {
    color: var(--white);
    font-size: 48px;
    font-weight: 800;
    line-height: 1.22;
    letter-spacing: 0;
    text-transform: none;
    gap: 30px;
  }
`;
