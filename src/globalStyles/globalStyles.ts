import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    line-height: inherit;
    font-weight: inherit;
    list-style-type: none;
    text-decoration: none;
  }

  body {
    max-width: 100vw;
    min-height: 200vh;
    overflow-x: hidden;
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    line-height: ${({ theme }) => theme.typography.lineHeight};
    color: ${({ theme }) => theme.palette.fontColor.dark};
    font-weight: 400;
    background-color: ${({ theme }) => theme.palette.background.default};

    .container-padding {
      padding-left: 8vw;
      padding-right: 8vw;

      @media screen and (max-width: 800px) {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    button {
      cursor: pointer;
    }
  }
`;
