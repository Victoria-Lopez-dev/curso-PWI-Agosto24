import Componente from "../component/Componente1"//llamamos a un document jsx podemos obviar indicar la extension ".jsx"
import Componente2 from "../component/Componente2"
import '../index.css'

export default function Home() {
    
    const producto={
        nombre:"producto1",
        cantidad:20
    }//producto.cantidad

    return(
        <div>
            <h1 style={{color:"red"}}>Clase 24</h1>
            <Componente titulo="Un titulo" info={producto}/>
            <Componente titulo="Subtitulo" info={producto}/>
           <Componente2/>
         

            
        </div>
    )
    
}

//props -> properties pasar informacion de componentes padres a hijos.

//cuando pasamos alguna declaracion JS dentro del return, debemos colocarla entre llaves 
//objeto -> propiedad:valor
//siempre la direccion en la que viaja la informacion es de padre a hijo 
