import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import  { Header } from './header.jsx'
import { App } from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
