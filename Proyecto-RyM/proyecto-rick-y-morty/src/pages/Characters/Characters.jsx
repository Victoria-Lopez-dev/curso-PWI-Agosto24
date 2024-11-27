import { useState } from 'react'

import Navegation from '../../components/Navegation/Navegation'
import Card from '../../components/Card/Card'

export default function Characters() {
    let [data,setData]=useState([])//crea un estado llamado data que de manera inicial es un array vacio

    const mostrarData=async()=>{
        //traigo la informacion de los personajes de Rick&Morty de la API 
       let infoAPI= await fetch("https://rickandmortyapi.com/api/character")
         .then((resp)=>{return resp.json()})
         .catch((error)=>console.log("error:" +error));
     
      // console.log(infoAPI.results)Esta API me mando la informacion dentro de una propiedad que llamo "result"
         setData(infoAPI.results)//cambiar el estado data por la informacion que me trae la API , es decir que pasa de un array vacio , a un array que contiene  a los personajes de Rick&Morty
          
     
     }

    return(
        <div>
            <Navegation/>
            <h1>Characters..</h1>  
            <button onClick={mostrarData}>Mostrar Info</button>
            <section className='d-flex gap-2 flex-wrap'>
            {
                data.map((personaje)=>{
                    return <Card key={personaje.id} personaje={personaje}/>
                })
            }
                
            </section>      
        </div>

    )
}
//pagina de personajes 

//condicionales JS : if/else switch op.ternario 
//op.ternario -> sintaxis condicion? accion-true :accion-false

//Fragment