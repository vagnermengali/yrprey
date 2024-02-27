import styled from "styled-components";

export const StyledBlogSection = styled.div`
  width: 100%;
  height: auto;
  max-width: 1280px;
  padding: 45px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  .container-blog {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
  .title-blog {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    text-decoration-line: underline;
    color: var(--white);
  }
  h4 {
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    text-align: center;
    color: var(--white);
  }
  span {
    background: var(--primary-color);
    background: var(--gradient-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .content-center {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
