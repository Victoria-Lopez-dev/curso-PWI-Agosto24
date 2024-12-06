// import { useState } from 'react'
import './App.css'
import Intro from '../../components/Presentacion'
import Curso from '../../components/Curso'

function App() {
  // const [alumnos, setAlumnos] = useState([{
  //   id:"1",
  //   nombre:'Juan Perez',
  //   curso:'HTML y CSS',
  //   edad:33
  // },{
  //   id:"2",
  //   nombre:'Marta Sanchez',
  //   curso:'HTML y CSS',
  //   edad:33
  // },{
  //   id:"3",
  //   nombre:'Luis Ruiz',
  //   curso:'Bootstrap',
  //   edad:33
  // },{
  //   id:"4",
  //   nombre:'Ana Gomez',
  //   curso:'HTML y CSS',
  //   edad:33
  // },{
  //   id:"5",
  //   nombre:'Facundo Martines',
  //   curso:'Bootstrap',
  //   edad:33
  // },{
  //   id:"6",
  //   nombre:'Daiana Gutierrez',
  //   curso:'HTML y CSS',
  //   edad:44
  // }]);

 

  return (
    <>
   
      <Intro/>
        <Curso />    
      <button> Ir a pagina secundaria</button>

    </>
  )
}

export default App
