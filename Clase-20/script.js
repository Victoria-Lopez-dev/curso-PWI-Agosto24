/*
DOM 
1 llamar al elemento (nodo) -> querySelector() querySelectorAll()
2 acceder a sus propiedades/ modificarlas 

*/
let menu= document.querySelector(".menu");//llamamos a la lista

//menu.style.display="none";//ocultar el menu

let info=["texto1","texto2","texto modificado","texto4","texto5"];
let productos=[{
    nombre:"remera",
    info:"info del producto...",
    precio:2000
},{
    nombre:"pantalon",
    info:"info del producto...",
    precio:2000
},{
    nombre:"zapatilla",
    info:"info del producto...",
    precio:2000
}]

info.push("otro texto mas...")

//crear elementos en HTML por medio del DOM

//crear el nodo/elemento -> createElement(etiqueta)
 let parrafo=document.createElement("p");

// //crear su contenido

 parrafo.textContent="agregando un parrafo.."

 parrafo.id="texto1";

//agregarlo al arbol de nodos 
//lo agrego como hijo de otro elemento(lo agrega como ultimo hijo) -> appendChild()
//sintaxis : nodoPadre.appendChild(nodoNuevo)


let seccion= document.querySelector("section");
seccion.appendChild(parrafo)

// agregando multiples textos 
for (let indice = 0; indice <info.length; indice++) {
    let parrafo=document.createElement("p");
    parrafo.textContent=info[indice]

    parrafo.classList.add("texto1");
    seccion.appendChild(parrafo)
    
}


//como agregar elementos creados desde JS en otros lugares que no sean al final del nodo padre
//lo agrego como "hermano" de otro elemento -> insertBefore()
//sintaxis : nodoPadre.insertBefore(nuevoNodo,nodoReferencia)
let itemLista=document.createElement("li");
let itemReferencia=document.querySelector("#item2");
let listaPadre=document.querySelector(".menu");

itemLista.textContent="item A";

listaPadre.insertBefore(itemLista,itemReferencia)



///-------- ejemplo de uno de los tantos usos de DOM
let main=document.querySelector("main");

for(let prod of productos){
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML=`
        <h3>${prod.nombre}</h3>
        <p>${prod.info}</p>
        <p>precio: ${prod.precio}</p>
        <button onclick="sumar()">Comprar</button>
    `
    main.appendChild(tarjeta)


}
let nombre="juan"
"hola" + nombre;//concatenacion

`hola ${nombre} `//alternativa usando template literals

//eventos -> acciones que realiza el usuario,y que estamos a la escucha para poder realizar acciones como consecuencia

//partes de un evento

//1-elemento de escucha (en donde ocurre el evento )
//2-la accion a escuchar (evento) ->https://developer.mozilla.org/es/docs/Web/Events

//click - mouseover - change - input
//3-funcion como respuesta al evento / accion a realizar cunado se ejecute el evento


//dos maneras de definir 
//metodo addEventListener()

/*
sintaxis:

nodo.addEventListener(accion/evento,funcionRespuesta) 

 */
let botonDesplegable=document.querySelector("button")

let todosLosParrafos=document.querySelectorAll("p");
botonDesplegable.addEventListener("mouseover",(event)=>{
    menu.classList.toggle("ocultar");//alternando entre sumar o sacar la clase "ocultar" del nodo "menu"
   // menu.style.display="none"
   console.log(event)
})


//otra manera de definir eventos:
//atributo en HTML  con el evento : on+evento onclick,onmouseover,onchange...
//tiene como valor la funcion a ejecutar

const saludo=()=>{
    let input=document.querySelector("#data");
    let valor=input.value//valor ingresado por el usuario en el input
    alert(`HOLA ${valor} !!!`)
} 

let contador=0
const sumar=()=>{
    contador++
    console.log(contador)
}

const mostrarInfo=(nodo)=>{
    // console.log(nodo.target.value) -> pasando como parametro el objeto event
    console.log(nodo.value)//pasando como parametro el objeto this
}

//nos da un objeto con la informacion sobre el evento ocurrido -> event
//lo puedo obtener llamandolo como parametro de la funcion del evento 
//event dentro de toda la info que nos trae,tambien nos trae el nodo en el que ocurre el evento (esa info esta en la propiedad target)

//change -> evento que ocurre cuando se produce un cambio en la etiqueta (input - textarea)

//this -> objeto que hace referencia al elemento(nodo) en el que ocurre el evento 

//preventDefault() | POO(programacion orientada a objetos )