import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  body {
  color: #007065;
  background-color: ${colors.primary};
  font-family: "Segoe UI", sans-serif;
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