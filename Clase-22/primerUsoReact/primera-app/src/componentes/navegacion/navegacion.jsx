import './nav.css'//importando un archivo css copleto 

export default function Nav() {
    //acciones JS 

    return(
        <nav>
            <ul>
                <li>item</li>
                <li>item</li>
            </ul>
            <p>un texto x.....</p>
        </nav>
    )
}


//por convencion se escriben con la primer letra mayuscula
/*
function Componente(){

    codigo JS del componente

    return(
    codigo HTML
    )
}


- dentro del return solo puedo devolver una unica etiqueta (usar una etiqueta padre y dentro todos los hijos que necesite ese componente)
- nombres de las funciones tienen que iniciar con la primer letra en mayuscula
- por fuera del return colocamos todo el codigo JS necesario en nuestro componente
*/