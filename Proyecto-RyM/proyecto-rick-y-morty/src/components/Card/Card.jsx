import { useState } from "react"

export default function Card({personaje}) {
    let [ocultar,setOcultar]=useState(true)//este estado lo creo para que me permita saber si tiene que ocultar o mostrar elementos
    console.log(personaje)
   //el objeto personaje contiene la info de cada personaje que me dio la API
    return(
        <div className='d-flex gap-2 border rounded tarjeta border-3 bg-primary'>
            <div>
                <img src={personaje.image}/>
                <h2>{personaje.name}</h2>
                <button 
                onClick={()=>setOcultar(false)} 
                className={ocultar?"btn btn-warning":"d-none"}>Know More</button>            
            </div>
            { ocultar ?'':
                <div className="px-5 py-2" >
                <button onClick={()=>setOcultar(true)}>X</button>
                    <ul>
                        <li>Character Status {personaje.status}</li>
                        <li> Species {personaje.species}</li>
                        <li>Origin {personaje.origin.name}</li>
                        <li>Gender {personaje.gender}</li>
                    </ul>
                </div>}
            

        </div>
    )
}