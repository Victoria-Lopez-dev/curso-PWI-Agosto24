//arrays -> agrupar datos , utilizando [] separando los datos,items con coma .
//para alterar la lista: metodos 
//sintaxis: array.metodo(valor)

//metodo -> push() unshift()- agregar elementos al final o al inicio del arary
// pop() shift() -> sacar elementos (el ultimo o el primero)
//splice() -> modificar o agregar elementos en cualquier lado
//slice() -> hacer una copia de una porcion del array

//indice -> numerar a cada item de la lista (inicia con el 0)
// indice   0       1   2   3           4   5       6
let lista=[111,"hola",true,"Marta",3354354,true,"Miriam"]
//length    1       2   3   4       5       6       7

lista.push("valor al final ",222,44);
lista.unshift("agrega al inicio")//ojo que me altera el indice
lista.pop();
lista.shift()
//acceder a un dato de la lista -> array[indice]

//metodo de JS -> nos indica el indice de el elemento de la lista(ubica el primer item que cumple con ese dato)
//array.indexOf()


//buscar a Marta y ,modificarlo para que  quede "Marta Gomez"
let indiceMarta=lista.indexOf("Marta");
lista.splice(4,1)

lista.splice(indiceMarta,1,"Marta Gomez")//splice(indice,cantidad,nuevoValor)

console.log(lista)

///---------------
//length ? -> largo ,cantidad de items de una lista
//array.length

lista.length



///---------------

// funciones -> conjunto de acciones/instrucciones que podemos utilizarlas la veces que necesitemos en el momento que le indiquemos .
//le podiamos tambien pasar parametros que nos premitia obtener distintas respuestas/acciones
//return -> devolver algo como resultado de la funcion
//definir funciones (crear)

//funcion tradicional

function agregarUnItem(dato) {
    lista.push(dato)
    console.log(lista)
}

//ejecutar 
agregarUnItem("item")
agregarUnItem(222)


//ejemplo

let listaPrevia=[];//variables globales 

//le explico al program que es agergarACarrito

function agregarACarrito(producto) {
    listaPrevia.push(producto);//listaPrevia.push("pantalon")
    let cantidadItems=listaPrevia.length //variable local
    if(cantidadItems === 1){
        console.log("tiene en el carrito 1 producto")
    }else{
        console.log("tiene en el carrito "+cantidadItems+ " productos")
    }
};

function promedio(num,num2,num3){
    let suma=num+num2+num3;//suma es una variable local
    // let suma=5+"hola"+true -> "5holatrue"
    console.log(suma/3)// "5holatrue"/3 -> NaN
}
function saludar(){
    alert("HOla como estas?")
}

function buscarIndice(itemLista,listaX){
   let indice= listaX.indexOf(itemLista);
   //let indice=lista.indexOf("Miriam") 


    return indice //resultado de la funcion - le pedimos que nos "devuelva"/retorne algun una vez finalizada toda la accion 
    
    console.log("HOALAAAA")//todo lo que definamos despues despues de un return no se ejecuta
}

//funciones flechas (arrow functions)
//solo cambia la forma de definirlos
/*
 sintaxis: (parametros)=>{
    acciones
    }
    const variable=(parametros)=>{
    acciones
    }
*/
const saludar2=()=>{
    alert("HOla como estas?")
}


//cuanto el usuario agrega productos ,se ejecuta el agregarACarrito
agregarACarrito("remera")
agregarACarrito("pantalon")
agregarACarrito("pantalon")
agregarACarrito("pantalon")

// console.log(promedio(5,"hola",true));
// //console.log(suma) -> tira error por que es una variable local


// let resultado=buscarIndice("Miriam",lista)
// console.log(resultado)

//a la vuelta: ciclos - bucles - estructuras de repeticion  - Objetos