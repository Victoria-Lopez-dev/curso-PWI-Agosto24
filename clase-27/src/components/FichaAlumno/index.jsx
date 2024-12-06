import { alumnosContext } from "../../context";
import { useContext } from "react";//hook que nos permite ir a buscar el contexto 

export default function FichaAlumno() {
    let [alumnosA]=useContext(alumnosContext)
    return(
        <>
        <section>
        <h3>Ficha de alumnos</h3>
            {alumnosA.map((alumno)=> {return (<div className="card bg-warning" key={alumno.id}>
                <p>{alumno.nombre}</p>
                <p>{alumno.curso}</p>
                <p>{alumno.edad}</p>        
            </div>)})}
        </section>
        

        </>
    )
}