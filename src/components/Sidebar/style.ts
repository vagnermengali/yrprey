import styled from "styled-components";

export const StyledSidebar = styled.div`
   @media (max-width: 1024px){
    z-index: 990099;
    position: fixed;
  }
`;

export const ContainerSidebar = styled.div`
  @media (max-width: 1024px){
    width: 90vw;
    max-width: 400px;
    right: 0;
    height: 90dvh;
    background-color: var(--grey-5);
    z-index: 990099;
    position:fixed;
  }
`;

export const Overlay = styled.div`
  @media (max-width: 1024px){
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 990099;
    background: rgba( 0, 0, 0, 0.35 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    cursor: pointer;
  }
`;