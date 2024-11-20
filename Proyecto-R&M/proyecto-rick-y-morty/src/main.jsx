import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home'//de indicar o no la extension (solo si estoy hablando del documento jsx )
import Characters from './pages/Characters/Characters'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
