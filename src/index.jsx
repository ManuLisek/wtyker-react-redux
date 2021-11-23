import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
  color: #007065;
  background-color: #f2d9e6;
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

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyle/>
      <App />
    </PersistGate>
  </Provider>, 
  document.getElementById('root')
);