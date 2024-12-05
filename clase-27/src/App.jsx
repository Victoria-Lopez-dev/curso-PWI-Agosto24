import { useState } from 'react'
import './App.css'
import Intro from './components/Presentacion'
import Curso from './components/Curso'

function App() {
  const [alumnos, setAlumnos] = useState([{
    id:"1",
    nombre:'Juan Perez',
    curso:'HTML y CSS'
  },{
    id:"2",
    nombre:'Marta Sanchez',
    curso:'HTML y CSS'
  },{
    id:"3",
    nombre:'Luis Ruiz',
    curso:'Bootstrap'
  },{
    id:"4",
    nombre:'Ana Gomez',
    curso:'HTML y CSS'
  },{
    id:"5",
    nombre:'Facundo Martines',
    curso:'Bootstrap'
  },{
    id:"6",
    nombre:'Daiana Gutierrez',
    curso:'HTML y CSS'
  }])

  return (
    <>
   
      <Intro alumnos={alumnos}/>
        <Curso alumnos={alumnos} />    
    

    </>
  )
}

export default App
