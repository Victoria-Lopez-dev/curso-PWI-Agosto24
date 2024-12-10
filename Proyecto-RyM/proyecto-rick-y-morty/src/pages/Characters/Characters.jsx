import { useState ,useEffect} from 'react'

import Navegation from '../../components/Navegation/Navegation'
import Card from '../../components/Card/Card'
import Filter from '../../components/Filter/Filter'

export default function Characters() {
    let [data,setData]=useState([])//crea un estado llamado data que de manera inicial es un array vacio

    let filterName=["Character Alive","Character Dead","Female","Male","Origin Unknown"]

    const mostrarData=async()=>{
        //traigo la informacion de los personajes de Rick&Morty de la API 
       let infoAPI= await fetch("https://rickandmortyapi.com/api/character")
         .then((resp)=>{return resp.json()})
         .catch((error)=>console.log("error:" +error));
     
      // console.log(infoAPI.results)Esta API me mando la informacion dentro de una propiedad que llamo "result"
         setData(infoAPI.results)//cambiar el estado data por la informacion que me trae la API , es decir que pasa de un array vacio , a un array que contiene  a los personajes de Rick&Morty
          
     
     }

    const filtrar=(inputData)=>{

        //del inputData necesitamos la informacion de "checked" y "value"
        let pulsado=inputData.checked;//booleano

        let filtroPulsado=inputData.value;
        console.log(pulsado)
        console.log(filtroPulsado)


        //si esta pulsado aplicar el filtro
        if(pulsado){
            console.log(data);
            let nuevaLista;

            switch (filtroPulsado) {
                case "Character Alive":
                    nuevaLista=data.filter((personaje)=>{return personaje.status === "Alive"})
                    break;

                case "Character Dead":
                    nuevaLista=data.filter((personaje)=>{return personaje.status === "Dead" })
                    break;

                case "Female":
                    nuevaLista=data.filter((personaje)=>{return personaje.gender ===  "Female"})
                    break;

                case "Male":
                    nuevaLista=data.filter((personaje)=>{return personaje.gender ===  "Male" })
                    break;

                case "Origin Unknown":
                    nuevaLista=data.filter((personaje)=>{return personaje.origin.name == "unknown" })
                    break;
                                  
            }
           setData(nuevaLista)//cambiando el estado por medio de su setter 
           
        }
    
    }

  
     useEffect(()=>{
        mostrarData();
     },[])//lo ponemos con [] para que lo ejecute una ve renderizado el componente



    return(
        <div>
            <Navegation/>
            <h2 className='text-white'>Filters</h2>

            <form className='row gap-2'>
                {
                    filterName.map((filter)=>{
                        return  <Filter key={filter} title={filter} filtar={filtrar}/>
                    })
                }  
            </form>
            <section className='d-flex gap-2 flex-wrap'>
            {
                //data.length-> la cantidad de personajes que tengo(largo del array data)
                data.length !== 0?
                data.map((personaje)=>{
                    return <Card key={personaje.id} personaje={personaje}/>
                })
                :
                <p className='alert bg-success'>
                <i className="bi bi-exclamation-triangle-fill pe-2"></i>Sorry! There are no characters width all those properties.</p>
            }
                
            </section>      
        </div>

    )
}
//pagina de personajes 

//condicionales JS : if/else switch op.ternario 
//op.ternario -> sintaxis condicion? accion-true :accion-false

//Fragment

//operador ternario : condicion? accion-true :accion-false


//vamos a armar un contexto -> buscar la info a la API 1 sola vez(evitando que se llame a la api cada vez que se reproduce "Characters") y a crear un estado con la info completa 
//esa info completa la vamos a usar para "volver a atras" cuando se desmarque un checkbox

//BReak!! volvemos 21hs
