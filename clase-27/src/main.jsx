//si usamos las etiquetas que nos ofrecer react-router : Routes,Route,..
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import  RouterSite  from './router'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterSite/>
//   </StrictMode>,
// )


//aca le estoy diciendo que apenas inicie mi sitio, vaya renderisando el componente segun lo indique el ruteo 

//alternativa Router -> si usamos el createBrowserRouter

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import  router  from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


//--------- ejemplo uso Context

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import AlumnosProvider from './context/index.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <AlumnosProvider>
//     <App />
//   </AlumnosProvider>
    
//   </StrictMode>,
// )
