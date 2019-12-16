import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import App from './components/home';
import store from './core/reduxStore/store';
import theme from './core/styles/theme';
import globalStyles from './core/styles';

const GlobalStyle = createGlobalStyle`${globalStyles}`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyle />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
