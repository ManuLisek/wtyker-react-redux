import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
@font-face {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-display: swap;
src: url('https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJbecmNE.woff2') format('woff2');
}
body {
color: ${colors.secondary};
background-color: ${colors.primary};
font-family: "Poppins", sans-serif;
min-height: 100vh;
}
* {
margin: 0;
padding: 0;
box-sizing: border-box;
text-decoration: none;
}
`;

export default GlobalStyles;