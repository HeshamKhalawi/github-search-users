import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';

const theme = {
  fonts: {
    h1: {
      family: "'Space Mono', monospace",
      size: '26px',
      lineHeight: '38px',
      weight: '700'
    },
    h2: {
      family: "'Space Mono', monospace",
      size: '22px',
      lineHeight: '33px',
      weight: '700'
    },
    h3: {
      family: "'Space Mono', monospace",
      size: '16px',
      lineHeight: '24px',
      weight: '400'
    },
    h4: {
      family: "'Space Mono', monospace",
      size: '13px',
      lineHeight: '20px',
      weight: '400'
    },
    body: {
      family: "'Space Mono', monospace",
      size: '15px',
      lineHeight: '25px',
      weight: '400'
    },    
  },
  colors: {
    light: {
      primary: "#0079FF",
      secondary: "#697C9A",
      tertiary: "#4B6A9B",
      quaternary: "#2B3442 ",
      quinary: "#F6F8FF",
      senary: "#FEFEFE",
    },
    dark: {
      primary: "#0079FF",
      secondary: "#FFFFFF",
      tertiary: "#1F1D2F",
      quaternary: "#1E2A47 ",
    },
  },
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals(console.log);
