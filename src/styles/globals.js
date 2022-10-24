import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --black-400: #292929;
    --white: #FFFFFF;
    --gray-100: #F7F8FA;
    --gray-200: #E1E3E5;
    --gray-400: #BDBDBD;
    --gray-700: #585858;
    --gray-blue-100: #EEF3F7;
    --gray-blue-200: #CBD0DC;
    --gray-blue-400: #A9B0B5;
    --gray-blue-500: #8C969C;
    --gray-blue-800: #4B5963;
    --blue-100: #F3F9FF;
    --blue-200: #93C2FB;
    --blue-400: #22A8E1;
    --blue-500: #1F69C1;
    --blue-800: #253B80;
    --purple-100: #790AE9;
    --purple-600: #380968;
    --purple-700: #220b43;
    --red-100: #FFF7F7;
    --red-200: #FFEBEC;
    --red-400: #EA6363;
    --yellow-100: #FFF9EB;
    --yellow-200: #FDECBA;
    --yellow-300: #FDE086;
    --yellow-400: #FBCC36;
    --yellow-500: #FFBE15;
    --green-100: #EBF4F0;
    --green-200: #CCEACC;
    --green-300: #B5DBC8;
    --green-400: #1BA956;
    --green-600: #00793E;
    --green-800: #0A6437;
    --lime-100: #E9F2CB;
    --lime-200: #DBE9A9;
    --lime-300: #9AD276;
    --lime-400: #92C900;
    --lime-500: #2D912C;

    --spacing-0: 0;
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 10px;
    --spacing-4: 16px;
    --spacing-5: 24px;
    --spacing-6: 32px;
    --spacing-7: 40px;
    --spacing-8: 48px;
    --spacing-9: 56px;
    --spacing-10: 64px;
    --spacing-11: 72px;
    --spacing-12: 80px;
    --spacing-13: 88px;
    --spacing-14: 96px;
    --spacing-15: 104px;
    --spacing-16: 120px;
    --spacing-17: 136px;
    --spacing-18: 152px;

    --fontsize-massive: 64px;
    --fontsize-giant: 48px;
    --fontsize-huge: 40px;
    --fontsize-big: 32px;
    --fontsize-extralarge: 24px;
    --fontsize-large: 20px;
    --fontsize-medium: 16px;
    --fontsize-small: 14px;
    --fontsize-extrasmall: 13px;
    --fontsize-label: 12px;

    --lineheight--1: 28px;

    --fw-light: 300;
    --fw-regular: 400;
    --fw-semibold: 500;
    --fw-bold: 700;
    --fw-extrabold: 900;
  }

  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    color: var(--black);
    font-family: 'Poppins', 'Open Sans', sans-serif;
    width: 100%;
    font-size: 87.5%; // 14px

    @media (max-width: 720px) {
      font-size: 81.25%; // 13px
    }
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    width: 100%;
  }

  a {
    cursor: pointer;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  textarea {
    white-space: revert;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: .6;
  }

  .hide {
    display: none !important;
  }
`

export default GlobalStyles
