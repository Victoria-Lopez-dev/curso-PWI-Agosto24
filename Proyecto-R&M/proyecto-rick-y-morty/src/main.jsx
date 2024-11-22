import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home'//de indicar o no la extension (solo si estoy hablando del documento jsx )
import Characters from './pages/Characters/Characters'
import Contact from './pages/Contact/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Characters />
  </StrictMode>,
)
