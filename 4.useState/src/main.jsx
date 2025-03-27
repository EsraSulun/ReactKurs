import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />

  //console da iki yere yazdırmasının sebebi StrictMode
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
