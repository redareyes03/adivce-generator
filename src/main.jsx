import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createGlobalStyle} from 'styled-components'
import { dark_blue, cyan } from './theme/colors'
import 'normalize.css'


const GlobalStyles = createGlobalStyle`
  body {
    /* display: flex; */
    height: 100vh;
    /* align-items: center;
    justify-content: center; */
    background-color: ${dark_blue};
    color: ${cyan};
    font-family: "Manrope", sans-serif;
  }
`


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
