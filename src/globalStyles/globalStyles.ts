import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  *, *::after, *::before {
    box-sizing: border-box;
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
    min-height: 100vh;
    overflow-x: hidden;
    font-weight: 400;
    line-height: 1.5;

    font-size: ${({ theme }) => theme.typography.fontSize.body};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    line-height: ${({ theme }) => theme.typography.lineHeight};
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.fontColor.dark};

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
      background-color: transparent;
      outline: none;
      border: none;
    }

    input {
      font-family: ${({ theme }) => theme.typography.fontFamily.body};
    }

    .flex-center {
      display: flex;
      align-items:center;
      justify-content:center;
    }
  }
`;
