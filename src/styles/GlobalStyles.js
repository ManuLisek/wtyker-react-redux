import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
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