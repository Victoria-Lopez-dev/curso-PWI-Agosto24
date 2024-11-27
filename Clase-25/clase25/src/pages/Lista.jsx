import Tarjeta from "../components/Tarjeta"

export default function Lista() {
    let arrayAlumnos=[{
        dni:"11111111",
        nombre:"Belen",
        edad:22,
        correo:"ejemplo@email.com"
    },
       {dni:"2222222",
        nombre: "Marcos",
        edad:33,
        correo:"marcos@email.com"
       },
       {dni:"333333",
        nombre: "Jose",
        edad:44,
        correo:"Jose@email.com"
       },
       {dni:"444444",
        nombre: "Julia",
        edad:55,
        correo:"julia@email.com"
       }]
    return(
        <div>
            <h1>Usando listas de React</h1>
        {// <ul>
            // {
            //     alumnos.map((alumno)=>{
            //         return <li>{alumno}</li>
            //     })
            // }
            // </ul>
            }
            { arrayAlumnos.map((alumno)=>{//alumno ahora es un objeto
                    return <Tarjeta key={alumno.dni} persona={alumno}/>//le paso al componente "Tarjeta" la prop "persona " que tiene el objeto de cada alumno
                })
            }
            
            <button>Agregar Nombre</button>
        </div>
    )
}
// array.map((ref)=>{return ....})

//key props -> prop particular de React que necesita para su buen funcionamiento al crear componentes/estructuras a partir de una lista