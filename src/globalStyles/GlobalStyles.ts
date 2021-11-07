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
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    line-height: ${({ theme }) => theme.typography.lineHeight};
    color: ${({ theme }) => theme.palette.fontColor.body};
    font-weight: 400;
  }
`;
