
export default function Intro() {
    return(
        <>
        <h1>Componente Intro</h1>
        <p>En este componente listamos a todos los alumnos</p>
        <p>Cantidad de alumnos : </p>
        <h2>Ellos son:</h2>
            <ul>
            <li>nombre alumno</li>
            </ul>
        <button className="bg-primary">Agregar nuevo Alumno</button>
        </>
    )
}