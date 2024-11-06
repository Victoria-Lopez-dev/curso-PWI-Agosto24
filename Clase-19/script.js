//DOM -> Document Object Model 

//interfaz entre HTML y JS
// elemento que traemos a Js -> nodo 
//document -> documento HTML

console.dir(document)

//metodos : getElementsByClassName() -getElementsByTagName() -getElementById()
//querySelector("selector") | querySelectorAll("selector") -> buscan al/los elemento/s por medio de su selector 
// document.metodo()

let tituloPrincipal=document.querySelector("h1");//nodo del h1
//querySelector -> trae el primer nodo que cumple con ese selector

console.dir(tituloPrincipal)
console.log(tituloPrincipal.textContent)
tituloPrincipal.textContent="Nuevo titulo"


// let formulario=document.querySelector("form")

// console.log(formulario.innerHTML)

console.dir(document.querySelector("img"))
//algunas propiedades de los nodos:
//textContent - innerText -> el contenido de texto
//innerHTML -> contenido html interno de la etiqueta
//id -> conocer el id de la etiqueta
//style -> objeto que me muestra las propiedades de CSS escritas en el atributo style de la etiqueta

// si quiero manejar clases (atributo class):
//classList -> add()-agregar clase/s remove() - sacar clase/s -toggle() alternar entre agregar/sacar clase/s

//aria... -> corresponden a atributos de accesibilidad
document.querySelector("h2").style.backgroundColor="#F90";
document.querySelector("h2").classList.add("texto")
tituloPrincipal.classList.add("claseA")

//querySelectorAll() -> array con todos los nodos que tengan ese selector

let subtitulos=document.querySelectorAll(".subt");
console.log(subtitulos)
subtitulos[2].style.color="red";


//inputs -> propiedad -> "value"-> informacion sobre el contenido del input

let input=document.querySelector("#contenido");
//input.value="HOLAAA"
console.dir(input)

//eventos

/*partes de un evento:

- evento (accion a escuchar)-> lista de eventos: https://developer.mozilla.org/es/docs/Web/Events

- elemento(nodo) en el que ocurre el evento 
- accion/es a realizar como respuesta 
*/
//2 alternativas

//todo de JS -> metodo addEventListener()

/*
    sintaxis :
     nodo.addEventListener("evento",funcion con las acciones a realizar)
    nodo.addEventListener("evento",()=>{accion/es a realizar })
*/
// let boton1=document.querySelectorAll("button")[0];//el primer boton del html
let botones=document.querySelectorAll("button")
let rojo=true;

botones[0].addEventListener("click",()=>{
    // if(rojo){
    //     tituloPrincipal.style.color="rgb(0,255,0)"
    // }else{
    //     tituloPrincipal.style.color="red"
    // }
    // rojo=!rojo
    tituloPrincipal.classList.toggle("colorVerde")
    
});
let radio=document.querySelector("img");
let contador=0
radio.addEventListener("click",()=>{
    contador++
    console.log(contador)
})

botones[1].addEventListener("click",()=>{
    console.log(input.value)
})

//clase proxima: 
/*
algunos metodos mas del DOM 
eventos: otros eventos - objeto event - this - preventDefault()

POO
*/

//una parte en JS y otra HTML

