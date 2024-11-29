import { Fragment, useState } from "react"

export default function htmlFormularios() {
 
    const[nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const[contador,setContador]=useState(200)

    const modificarEstado=(nodo)=>{
        console.dir(nodo.id)
        if(nodo.id === "nombre"){
              setNombre(nodo.value)//actualiza el estado nombre con el valor que el usuario escribe en el input
        }
        if(nodo.id === "apellido"){
            setApellido(nodo.value)//actualiza el estado nombre con el valor que el usuario escribe en el input
      }

        
    }

    const contadorCaract=(nodo)=>{
        let cantidad=nodo.value.length;
        console.log(cantidad);
        setContador(contador-cantidad)
    }// en este ejemplo tomamos el valor actual del  textarea para indicar cuantos caracteres tiene disponible

    return(
        <Fragment>
        
        <h2>{nombre + " " + apellido} </h2>
        <form action="" className="mt-5" >
            <label htmlFor="nombre">Nombre</label>
            <input className={nombre.length <4? "bg-danger p-2 ":"bg-success p-2"} type="text" id="nombre" value={nombre} onInput={(event)=>modificarEstado(event.target)}/>
            {
                //on Input -> evento que se ejecuta cada vez que "value" se modifica.
                //ejecuta la funcion modificarEstado
                //event -> objeto que nos dan los eventos que contiene toda la informacion sobre ese evento ocurrido 
                //event -> target propiedad que contiene al nodo en el que ocurrio el evento

            }
            
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" value={apellido} onInput={(event)=>modificarEstado(event.target)}/>

            <label htmlFor="">Marcado...</label>
            <input type="checkbox" value="marcado"/>

            <div>
                <label>Comentarios</label>
                <p>Tiene como limite {contador} caracteres</p>
                <textarea onChange={(event)=> contadorCaract(event.target)} maxLength="200" ></textarea>            
            </div>


            <input type="submit" value="Enviar"/>
        </form> 
        </Fragment>
    )
}

//atributo -> value 

//estado -> variables dinamicas 

//operadores ternarios -> sintaxis condicion? accion-true:accion-false
//class -> className for-> htmlFor


// luego del break : condicionales + useEffect -> proyecto 

