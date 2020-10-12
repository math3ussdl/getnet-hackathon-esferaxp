import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    background: var(--color-background);
  }

  *, button, input {
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --color-background: #FFFFFF;
    --color-primary: #EC0000;
    --color-primary-hover: #FF5B5B;
    --color-text: #000000;
    --color-placeholder: #999999;
    --color-link: rgba(84,86,90,1);
  }
`;
