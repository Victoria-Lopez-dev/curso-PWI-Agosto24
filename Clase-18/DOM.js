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
let subtitulo2=document.querySelector("#subtituloDom");


//querySelectorAll("selector")-> trae un array con todos los nodos del HTML que coincidan con ese selector

console.log(document.querySelectorAll('h2'));

console.dir(subtitulo2)// console.dri() me trae el nodo en formato objeto siempre


// algunas propiedades del DOM

//aria -> corresponden a patributos de accesibilidad
//id -> nos muestra el id del elemento
//innerHTML -> toda la estructura HTML que tiene internamente el nodo
//innerText -> texto interno de ese nodo

let div=document.querySelector(".contenido");

console.log(div)
console.log(div.innerText)
console.log(document.querySelector(".contenido").innerText)


 div.innerHTML="<h2>CAMBIO de subtitulo....</h2>"

div.style.backgroundColor="red";

