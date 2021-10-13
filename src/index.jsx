import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    color: #007065;
    background-color: #f2d9e6;
    font-family: "Segoe UI", sans-serif;
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
  `;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);