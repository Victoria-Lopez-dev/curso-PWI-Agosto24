//JSON -> JS Object Notation 

// formato de texto para el envio de informacion 

let data=[{
    producto:"remera",
    precio:20000,
    stock:20
},{
    producto:"pantalon",
    precio:30000,
    stock:22
}]

//JS -> stringify | parse

//JSON.stringify() -> transformar un array o un objeto en JSON
console.log(data)
let dataJSON=JSON.stringify(data)
console.log(dataJSON)
//JSON.parse() -> transformar un JSON objeto o array 
console.log(JSON.parse(dataJSON))

console.log(JSON)

//API -> Aplication Programing Interfase 
//intermediario entre front(browser) y servidor
//hace acciones complejas un poco mas simple 
//hay una comunicacion de ida y vuelta con la API (siempre nos responde)


//ASINCRONIA
// la espera a que finalize una accion para continuar con otra 
//esperas para que pueda finalizar una tarea y continuar con la siguiente

//----1 - callback -> manera de llamar a una funcion que pasa como parametro de otro (argumento)

function myDisplayer(info) {
    let texto=document.querySelector("p");
    texto.innerText=info
}

function funcion2(num1,num2,pepito) {
//let suma=  5+5
 let suma=num1+num2;

 //myDisplayer(suma) -> nos queda la ejecucion de la funcion myDisplayer(suma)
 pepito(suma)   
}

funcion2("hola ","Juan ",myDisplayer)


//--- sin uso de callbacks

// function suma(num1,num2){
//     let suma=num1+num2;
//     return suma
// }

// myDisplayer(suma(num1,num2))


//eventos -> addEventListener()

let boton=document.querySelector("#botonA");
let funcionCallback=()=>{
    alert("Hola")
}

boton.addEventListener("click",funcionCallback)


//----2 - promesas -> una accion a ejecutar ( se se cumple ejecutar un callback y si no se cumple ejecuta otro callback)

/*
promesa
.then(()=>{accion si  se cumple la promesa})
.catch(()=>{accion si no se cumple la promesa})
*/
//fetch -> promesa que me permite ir a buscar recuresos de una fuente externa (como por ejemplo una API)

/*
fetch('direccion')
.then()<- si logro obtener ese recurso
.catch()<- si no logro obtener el recurso solicitado
*/

//ejemplo ->buscar info en RickyMorty API
//metodo json() para tomar la info recibida y transformarla a un formato conocido por JS
let info;
// fetch("https://rickandmortyapi.com/api/character")
// .then((resp)=>{return resp.json()})//pasos a seguir si la promesa se cumple
// .then((data)=>{info=data;console.log(info.results)})

// .catch((error)=>console.log("error:" +error))//si la promesa no se cumple

// console.log(info)
//----3 - async/ await palabras que  trabajan en conjunto para indicar la espera de una accion a finalizar para iniciar la siguiente, transformando una funcion sincronica a una funcion asincronica
//sintaxis:

/* en una funcion tradicional
 async function name(params) {
    
 }
*/

/* en una funcion flecha

const nombre=async()=>{
    }

*/


const mostrarData=async()=>{
   await fetch("https://rickandmortyapi.com/api/character")
    .then((resp)=>{return resp.json()})//pasos a seguir si la promesa se cumple
    .then((data)=>{info=data;})
    .catch((error)=>console.log("error:" +error));

    console.log(info)
    mostrarInfo(info.results)

}

const mostrarInfo=(lista)=>{
    let section=document.querySelector("section");
    for(let item of lista){
        let texto=document.createElement("p");
        texto.textContent=item.name
        section.appendChild(texto)
    }
}
//el await hace que espere a que termine de ejecutar todo el fecth para seguir con el codigo que se encuentra leugo de este 

mostrarData()

//proxima clase : React -> libreria  y Proyecto Rick y Morty 