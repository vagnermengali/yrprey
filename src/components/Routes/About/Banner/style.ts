import styled from "styled-components";

export const StyledBannerSection = styled.section`
  width: 100vw;
  height: calc(100vh - 76.8px);
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  .img-banner-about {
    width:100%;
    height:100%;
    position: absolute;
    top: 0;
    right:0;
    left: 0;
    bottom: 0;
    margin: 0 auto;
  }
`;
