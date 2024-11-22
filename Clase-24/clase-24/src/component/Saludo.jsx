import { useState } from "react";//uso destructing para traer siolamente a el metodo useState

export default function Saludo() {
   // let nombre="Juan";cree una variable

    const[nombre,setNombre]=useState('Juan');//cree un estado llamado "nombre" que de manera inicial tenga como valor 'Juan', y con esto obtuve tambien un setter (funcion para poder modificar el estado) que lo almacene en una variable llamada setNombre gracias al concepto de destructing en arrays

    //useState() -> me crea un estado con un valor inicial y aparte me da una funcion que se encarga de actualizar el estado y todas las areas del componente en donde se aplico dicho estado -> se lo reconoce como setter.
    //el estado + funcion -> array donde en el indice 0 esta el estado y en el indice 1 esta la funcion 

    const [data,setData]=useState(22);
    const [info]=useState("info estatica")
    

    const cambioNombre=(event)=>{
        let nuevoNombre=prompt("Ingrese un nombre nuevo")
        // nombre="Ana";
        setNombre(nuevoNombre)// actualizar el estado nombre con el valor que le coloque entre parentesis y actualizarlo en todos los lugar del componente que lo utilice 
        let resultado=data+1
        setData(resultado)
        
    }

    return(
        <div>
            <h3>Hola! {nombre}</h3>
            <p>{data}</p>
            <p>{info}</p>
            <button className="botones" onClick={(event)=>cambioNombre(event)}>Otro nombre</button>
        </div>
    )
    
}

//evento y redefinir la variable "nombre"
//eventos en React -> on+Evento (con la primer letra en mayuscula)
/*

export default function Componente() {
    codigo JS

    return(
        estructura HTML
    )
    
}
*/
//estados - states -> variables reactivas (variables que pueden modificarse a lo largo de la vida del componente: mientras se renderisa )