import './style.css'

export default function Componente({titulo,info}) {
   //codigo JS.... props.titulo

    return(
        <div className='seccion-componente'>
            <h2>{titulo}</h2>
            <p>pequeño parrafo....</p>
            <p>cantidad : {info.cantidad}</p>
            <button className='botones'>click</button>
        </div>
    )
    
}

//sin destructing

// export default function Componente(props) {
   
//     return(
//         <div className='seccion-componente'>
//             <h2>{props.titulo}</h2>
//             <p>pequeño parrafo....</p>
//             <p>cantidad : {props.info.cantidad}</p>
//             <button>click</button>
//         </div>
//     )
    
// }

//cuando queremos implementar JS dentro del return lo tenemos que colocar entre llaves 
//props -> properties -> objeto que permite ßpasar informacion de componentes padres a hijos.

//objeto -> propiedad:valor
//como parametro de la funcion del componente, viaja el objeto props que contiene dentro todas la info que pasamos desde el padre

//destructing -> "descontracturar"

