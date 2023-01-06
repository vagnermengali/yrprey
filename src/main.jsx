import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles, ResetCSS } from "./style/global";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <GlobalStyles />
        <ResetCSS />
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)