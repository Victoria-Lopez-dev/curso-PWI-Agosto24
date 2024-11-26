import Tarjeta from "../components/Tarjeta"

export default function Lista() {
    let arrayAlumnos=[{nombre:"Ana",
        edad:22,
        correo:"ejemplo@email.com"
    },
       {nombre: "Marcos",
        edad:33,
        correo:"marcos@email.com"
       },
       {nombre: "Luis",
        edad:44,
        correo:"luis@email.com"
       },
       {nombre: "Julia",
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
                    return <Tarjeta persona={alumno}/>//le paso al componente "Tarjeta" la prop "persona " que tiene el objeto de cada alumno
                })
            }
            
            <button>Agregar Nombre</button>
        </div>
    )
}
// array.map((ref)=>{return ....})