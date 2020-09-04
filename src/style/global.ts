import { createGlobalStyle } from "styled-components"
import media from "~/style/media"

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  html,
  body {
    height: 100%;
  }

  body {
    background: ${props => props.theme.colors.neutral050};
    margin: 0px;
  }

  :root {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.font.clrDarkPrimary};
    font-family: ${props => props.theme.font.family};
    font-size: 16px;
    font-weight: 400;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;

    ${media.lessThan("medium")`
      font-size: 18px;
    `}
  }

  div#root { height: 100vh; }

  button, input {
    font-family: ${props => props.theme.font.family};
  }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
    margin: 0;
  }

  #gatsby-focus-wrapper {
    height: 100vh;
  }
`
