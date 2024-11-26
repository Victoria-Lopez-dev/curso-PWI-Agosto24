import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import Lista from './pages/Lista.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lista />
  </StrictMode>,
)
