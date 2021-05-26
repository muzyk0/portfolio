import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import App from './App';
import {defaultTheme} from './common/Styles/Styled-component/theme';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Open Sans', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    margin: 0;

  }
  body {
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    background: #212529;
  }
  p {
    line-height: 1.8;
  }
  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  section {
    padding: 4.5rem 0;
    @media (max-width: 767.98px) {
      padding: 3.5rem 0;
    }
    
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`
ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <Global/>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
