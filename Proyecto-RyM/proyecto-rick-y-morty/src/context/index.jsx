import { createContext,useState,useEffect} from "react";


//creamos el contexto

export const charactersContext= createContext([])//creamos un contexto con un valor por defecto


//provider -> funcion que nos da los "permisos" para modificarlo

export default function CharactersProvider({children}) {
    let [character,setCharacters]=useState([]);

    const mostrarData=async()=>{
        //traigo la informacion de los personajes de Rick&Morty de la API 
       let infoAPI= await fetch("https://rickandmortyapi.com/api/character")
         .then((resp)=>{return resp.json()})
         .catch((error)=>console.log("error:" +error));
     
         setCharacters(infoAPI.results)//cambiar el estado data por la informacion que me trae la API , es decir que pasa de un array vacio , a un array que contiene  a los personajes de Rick&Morty
          
     
     }
     useEffect(()=>{
       mostrarData();  
     },[])
    

     return(
        <charactersContext.Provider value={character}>
         {children}
        </charactersContext.Provider>
     )
    
}