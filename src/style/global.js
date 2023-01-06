import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 @font-face {
  font-family: 'Roboto';
  src: local('Roboto'), url(/font/Roboto-Regular.ttf) format('truetype');
}

:root {
    --primary-color:#FF1A56;
    --secondary-color: #D80B4B;
    --tertiary-color: #A9254E;
    --quartenary-color:#FCB9CB;
    --gradient-color: linear-gradient(90deg, #FF1A56 0%, #D80B4B 100%);
    --gradient-color-animation: linear-gradient(
        45deg,
        #FF1A56,
        #D80B4B,
        #FF1A56,
        #D80B4B,
        #FF1A56,
        #D80B4B
      );
    --grey-0:#28292A;
    --grey-1: #3D3E3F;
    --grey-2: #B7B8B8;
    --grey-3: #29292A;
    --grey-4: #404141;
    --grey-5: #101112;
    --grey-6: #2F2A2C;
    --yellow-0: #ecb244;
    --blue-0: #335c9c;
    --blue-1: #008ce7;
    --orange-0:#fa6800;
    --orange-1: #f7931a;
    --white: #FFFFFF;
    --black: #000000;
    --transparent: transparent;
    
  html, body, #root {
    width: 100%;
    height: 100%;
    margin:0;
    padding:0;
    background-color: var(--grey-5);
  }  
  *::selection {
    background-color: #FF1A56;
    color: #fff;
    text-shadow: none;
}
  a {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
}
  `;

export const ResetCSS = createGlobalStyle`

  html,main, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: 'Roboto', sans-serif;
    vertical-align: baseline;
    scroll-behavior: smooth;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ::-webkit-scrollbar {
  width: 0.1px;
  }
  ::-webkit-scrollbar-track {
    background: var(--gray-4);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--gray-2);
    border-radius: 20px;     
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
