import { createGlobalStyle } from 'styled-components'

// FONTS
import { LogoFontFace, MainFontFace } from "./Fonts";

const GlobalStyle = createGlobalStyle`
  ${MainFontFace}
  ${LogoFontFace}

  :root {
    --primary: #ffab00;
    --white: #FFFAF5;
    --black: #171717;
    --blue: #1f3a93;
    --blueTransparent: #1f3a9388;
    --purple: #663399;
    --purpleTransparent: #66339988;
  }

  html, body, div, span, applet, object, iframe,
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
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    background: var(--black);
    line-height: 1;
    font-family: 'Segoe-UI';
    font-weight: 400;
  }

  a {
    text-decoration: none;
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

  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;

    &:hover, &:active, &:focus {
      outline-style: none;
    }
  }

  html{
    &::-webkit-scrollbar-track {
      background: linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%);
    }
    &::-webkit-scrollbar {
      width: .5rem;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary);
    }
  }
`

export default GlobalStyle