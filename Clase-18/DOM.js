//DOM Document Object Model

//document -> palabra rec que representa al HTML "HTML hecho objeto"
//console.log(document)

//metodos DOM que vive en el document

// let perro={
//     nombre:"Firulais",
//     ladra:()=>{
//         alert("Ruff")
//     }
// }

// console.log(perro.ladra())

//metodos que nos permite acceder a la repesentacion en forma de objeto del elemento del HTML (nodos)

//selector -> # - id , . - clases, nada - etiquetas

//querySelector("selector") -> trae el primer nodo del HTML que coincida con ese selector
let subtitulo2=document.querySelector("#subtituloDom");//objeto


//querySelectorAll("selector")-> trae un array con todos los nodos del HTML que coincidan con ese selector

console.log(document.querySelectorAll('h2'));//array

console.dir(subtitulo2)// console.dri() me trae el nodo en formato objeto siempre


// algunas propiedades del DOM

//aria -> corresponden a atributos de accesibilidad
//id -> nos muestra el id del elemento
//innerHTML -> toda la estructura HTML que tiene internamente el nodo
//innerText -> texto interno de ese nodo
//textConent -> contenido de texto del nodo.
//classList ->lista de todas las clases que tiene un elemento
//classList -> 3 metodos que podemos aplicar : add()-agregar una clase , remove() sacar una clase  toggle()- si tiene la clase , la saca; sino la agrega 

let div=document.querySelector(".contenido");

console.log(div)
console.log(div.innerText)
console.log(document.querySelector(".contenido").innerText)


 div.innerHTML="<h2>CAMBIO de subtitulo....</h2>"


/// si queremos por medio del DOM modificar estilos de etiquetas
//2 alternativas:

//1- propiedad style -> objeto que contiene todas las propiedades CSS. Se meustra en el inspector del HTML como el atributo style

div.style.backgroundColor="red";//background-color -> backgroundColor
div.style.borderRadius="10px";
div.style.padding="3rem"


//2- modificar clases ,las cuales previamente definimos en el css
//classList

//agregar una clase -> sintaxis: nodo.classList.add()
subtitulo2.classList.add("fondo-verde");

//sacar una clase-> sintaxis: nodo.classList.remove()
document.querySelector("h1").classList.remove("fondo-verde")
document.querySelector("h1").classList.toggle("fondo-verde");//agrega

//alterna una clase-> sintaxis: nodo.classList.toggle()

subtitulo2.classList.toggle("fondo-verde");//la saca

let lista=document.querySelector("ul")

lista.classList.toggle("mostrar")
lista.classList.toggle("mostrar")
lista.classList.toggle("mostrar")


//uso de querySelectorAll

let todosLosSubtitulos=document.querySelectorAll('h2');//un array
console.log(todosLosSubtitulos)
// acceder a un item de la lista que es un objeto, y luego modificar una propiedad de dicho objeto

// todosLosSubtitulos[0].classList.add("fondo-verde");
// todosLosSubtitulos[1].classList.add("fondo-verde");
// todosLosSubtitulos[2].classList.add("fondo-verde");

//lo puedo hacer en un bucle

for(let subtitulo of todosLosSubtitulos){
    subtitulo.classList.add("fondo-verde")
}




//crear elementos en el DOM del HTML
//metodo createElement("elemento") - alternativa a innerHTML
//nodoPadre.appendChild(nodoHijo) -> agregar un nodo como hijo de otro

let section= document.querySelector("section");

// section.innerHTML=`
//     <div class="tarjeta" >
//         <h4>titulo...</h4> 
//         <p>un texto....</p>
//     </div>
//     `

//alternativa

let agregarTarjeta=()=>{
    let tarjeta=document.createElement("div");//creo un <div>
    tarjeta.classList.add("tarjeta");//agrego la clase "tarjeta"
    tarjeta.innerHTML=` 
            <h4>titulo...</h4> 
            <p>un texto....</p>`//indico su contenido
    section.appendChild(tarjeta)//lo agregamos como hijo de section

}
                                    //cantidad=cantidad+1
for (let cantidad = 1; cantidad <5; cantidad++) {
    agregarTarjeta()
    
}

//Proxima clase : clase practica (dudas ) + Eventos
//variables - condicionales - bucles - funciones - DOM

document.querySelector('body').classList.toggle("fondo-oscuro")

