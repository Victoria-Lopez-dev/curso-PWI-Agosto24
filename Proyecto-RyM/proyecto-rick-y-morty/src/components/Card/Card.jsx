import { useState } from "react"

export default function Card({personaje}) {
    let [ocultar,setOcultar]=useState(true)
   //el objeto personaje contiene la info de cada personaje que me dio la API
    return(
        <div className='d-flex gap-2 border rounded tarjeta border-3 bg-primary'>
            <div>
                <img src={personaje.image}/>
                <h2>{personaje.name}</h2>
                <button onClick={()=>setOcultar(false)}>Know More</button>            
            </div>
            { ocultar ===true ?'':<div><p>seccion desplegada con mas info</p></div>}
            

        </div>
    )
}