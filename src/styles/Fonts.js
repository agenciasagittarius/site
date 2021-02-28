import { css } from 'styled-components'

// FONTS
import Quantify from '../assets/fonts/Quantify.ttf'
import SegoeUI from '../assets/fonts/Quantify.ttf'
import SegoeUIBold from '../assets/fonts/Quantify.ttf'


export const LogoFontFace = css`
  @font-face {
    font-family: 'Quantify';
    font-style: normal;
    font-weight: bold;
    /* src: url('${Quantify}'); */
    src: url('${Quantify}') format('truetype');
  }
`


export const MainFontFace = css`
  @font-face {
    font-family: 'Segoe-UI';
    font-style: normal;
    font-weight: 400;
    /* src: url('${SegoeUI}'); */
    src: url('${SegoeUI}') format('truetype');
  }
  @font-face {
    font-family: 'Segoe-UI-Bold';
    font-style: normal;
    font-weight: bold;
    /* src: url('${SegoeUIBold}'); */
    src: url('${SegoeUIBold}') format('truetype');
  }
`