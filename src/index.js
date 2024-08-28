import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom"
import { Suspense } from "react"
import { Provider } from "react-redux"
// import { ThemeProvider } from 'styled-components'
import theme from './assets/theme';
import { ThemeProvider } from '@mui/material/styles';

import App from './App';
import 'normalize.css'
import './assets/css/index.less'

import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <Suspense fallback={<h3>Loading...</h3>}>
     <ThemeProvider theme={theme}>
     <HashRouter>
            <App />
    </HashRouter>
     </ThemeProvider>
    </Suspense>
    </Provider>
  </React.StrictMode>
);