

export default function FichaAlumno({alumno}) {

    return(
        <>
        <div className="card bg-warning">
            <p>{alumno.nombre}</p>
            <p>{alumno.curso}</p>
            <p>{alumno.edad}</p>        
        </div>

        </>
    )
}