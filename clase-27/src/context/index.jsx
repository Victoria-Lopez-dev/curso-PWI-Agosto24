import { createContext } from "react";
import { useState } from "react";

export const alumnosContext=createContext([
    {id:"a",
        nombre:"Ejemplo",
        curso:"Curso",
        edad:1
    }]
)

export default function AlumnosProvider({children}) {
    const[alumnos,setAlumnos]=useState([{
        id:"1",
        nombre:'Juan Perez',
        curso:'HTML y CSS',
        edad:33
      },{
        id:"2",
        nombre:'Marta Sanchez',
        curso:'HTML y CSS',
        edad:33
      },{
        id:"3",
        nombre:'Luis Ruiz',
        curso:'Bootstrap',
        edad:33
      },{
        id:"4",
        nombre:'Ana Gomez',
        curso:'HTML y CSS',
        edad:33
      },{
        id:"5",
        nombre:'Facundo Martines',
        curso:'Bootstrap',
        edad:33
      },{
        id:"6",
        nombre:'Daiana Gutierrez',
        curso:'HTML y CSS',
        edad:44
      }])

    return(
        <alumnosContext.Provider value={[alumnos,setAlumnos]}>
            {children}
        </alumnosContext.Provider>
    )
}









//crear un contexto (puedo tener tantos como informacion que quiero transmitir a varios componentes)
//provider -> funcion para indicar quien tiene "acceso" a utilizar y modificar el contexto