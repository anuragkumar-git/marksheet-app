import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'
import { MarksheetProvider } from './context/MarksheetContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MarksheetProvider>
        <App />
      </MarksheetProvider>
    </BrowserRouter>
  </React.StrictMode>
)