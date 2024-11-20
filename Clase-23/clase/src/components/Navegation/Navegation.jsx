import './nav.css'//me traigo el CSS propio de este componente
import React from 'react'

export default function Navegation() {
    //codigo js - funcionalidad 

    return(
        <nav>
            <p> NUEVO LOGO</p>
            <ul className="menu">
                <li>item menu</li>
                <li>item menu</li>
            </ul>
        </nav>
    )
    
}



// class Navegation extends React.Component{
//     render(
//         <h2>HOLA</h2>
//     )
// }

//renderisar -> reproducir 

//Componente: fraccion/bloque independiente de mi sitio . Permite reutilizarlo

//componentes -> definir funciones o clases
//su nombre con la 1er letra en mayuscula
//return -> devuelve el componente en si (la estructura html)
//dentro del return solo puede devolver 1 etiqueta( si mi componente tiene varias etiquetas , utilizo -por ahora- el recurso de <div> )


//JSX - React

//el atributo class -> className 
// atributos de eventos on+evento -> evento con 1er letra en mayuscula (camelCase)