import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom"
import { Suspense } from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MUIThemeProvider,createTheme} from '@mui/material/styles';
import theme from './assets/theme';

import App from './App';
import 'normalize.css'
import './assets/css/index.less'

import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
    const theme1 = createTheme({
        palette: {
          primary: {
            main: '#a4c3e6',
            contrastText: '#fff'
          },
          secondary: {
            main: '#333',
            contrastText: '#dedede'
          },
      }
})
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <Suspense fallback={<h3>Loading...</h3>}>
     <MUIThemeProvider theme={theme1}>
     <ThemeProvider theme={theme}>
     <HashRouter>
            <App />
    </HashRouter>
     </ThemeProvider>
     </MUIThemeProvider>
    </Suspense>
    </Provider>
  </React.StrictMode>
);