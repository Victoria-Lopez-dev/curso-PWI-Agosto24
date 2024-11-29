import Nav from './component/Nav'
import Seccion from './component/Seccion'
import  Componente  from './component/Componente'
import  Formulario  from './component/Formulario'

import { Fragment,useState } from 'react'
// import  React  from 'react' -> <React.Fragment>
import './App.css'

function App() {
    const[ocultar,setOcultar]=useState(false)
  return (
    <Fragment  >
      <Nav/>
      <h1 className="text-success"> Clase 26</h1>
      <Seccion/>

      <button onClick={()=> setOcultar(!ocultar)}>
      {ocultar? "Ocultar":"Mostrar"}
      </button>
      
      <section>
      {ocultar?<Componente/>:''}
          
      </section>

     <Formulario/>
    </Fragment>
  )
}

export default App
//Fragment -> reemplazar los <div> que usamos para que no tire error el componente 
// Fragment -> no se debe pasar ni props ni clases 
//Fragment || <> </> || React.Fragment ( importando React )

//+ -* / ><>= == ==!= && || !