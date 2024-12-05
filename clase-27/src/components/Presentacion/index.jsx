
export default function Intro() {
    let cursos=["HTML y CSS","Bootstrap","JavaScript"]

    return(
        <>
        <h1>Componente Intro</h1>
        <p>En este componente listamos a todos los alumnos e indicamos los cursos disponibles</p>
        <section className="d-flex justify-content-evenly p-2">
        {cursos.map((curso)=>{return <p className="alert alert-primary" key={curso}>{curso}</p>})}
        </section>
        
        <h2>Cantidad de alumnos : </h2>
        <p>Ellos son:</p>
            <ul>
            <li>nombre alumno</li>
            </ul>
        <button className="btn p-3 bg-primary text-light">Agregar nuevo Alumno</button>
        </>
    )
}