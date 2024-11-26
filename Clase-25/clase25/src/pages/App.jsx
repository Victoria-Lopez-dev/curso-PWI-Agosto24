import { useState } from "react"
import Nombre from "../components/Nombre/Nombre"
import Boton from '../components/Boton';

function App() {
  const [data,setData]=useState("")//creo el estado de nombre data
  const [info,setInfo]=useState(true)

  return (
    
      <div>
        <h1>Listas - key props</h1>
        <Nombre data={data}/>
        <Boton valor="Ana" setData={setData}/>
        <Boton valor="Marcos" setData={setData}/>
        <Boton valor="Luis" setData={setData}/>
      </div>
  )
}

export default App

// la informacion ,por medio de props,siempre se pasa de padres a hijos 