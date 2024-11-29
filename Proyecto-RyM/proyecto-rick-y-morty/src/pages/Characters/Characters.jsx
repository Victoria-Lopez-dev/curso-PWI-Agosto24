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
       // console.dir(inputData)me muestre por consola la informacion del input que se pulso

    // console.log("checkbox activo? "+inputData.checked)
    // console.log(inputData.value)

    if(inputData.value === "Female" ){
        let infoFiltrada =data.filter((personaje)=>{return personaje.gender === "Female"});
        setData(infoFiltrada)//modifique el estado data para que ahora solamente tenga a aquellos de gender Female
    }
    if(inputData.value === "Male" ){
        let infoFiltrada =data.filter((personaje)=>{return personaje.gender === "Male"});
        setData(infoFiltrada)//modifique el estado data para que ahora solamente tenga a aquellos de gender Female
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

//proxima clase : repaso Formulario del proyecto + implementar useEffect en los filtros 
//react router - redux