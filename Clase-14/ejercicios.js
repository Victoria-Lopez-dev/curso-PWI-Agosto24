//- variables
//-tipo de datos
//- condicionales
//- operadores
//-algunas herramientas de JS (metodos): console.log() - prompt() - alert()- Number() parseInt() parseFloat() toString() - toLowerCase() - toUpperCase()-typeof()

//Ejercicios
/*
1. Hacer una función que reciba un parámetro y nos devuelva el tipo de valor que es.
Ejemplo:
Let valor =“hola”  —-> devuelve string
Let valor =4546.  —-> devuelve number
*/

//prompt() -> herramienta de JS que siempre nos va a devolver un string

// let valor =prompt("ingrese un valor");
let valor=4546;//variable global

typeof(valor);//utilizamos typeof()para que nos indique el tipo de dato que es a; variable "valor"
console.log(typeof(valor))//le pedimos que nos muestre en la consola el tipo de dato que es la variable "valor"


/*
2. Dado una edad por medio de un prompt(), usar un condicional para indicar por consola si esa persona es mayor de 18 años o no.
*/
//prompt()
//condicional : if/else - operador ternario 
//console.log()

//que podemos usar para evaluar si un valor es mayor o menor a 18
//operador de comparacion > < >= <=

//edad >18 edad<18 
//2b -> agregar un apartado que indique por consola si el usuario tiene 18 años 

//if -> 
 //let edad=parseInt(prompt("Indique su edad"));
 // tipo de dato del prompt es siempre string ,pero puedo transformarlo en un numero

// "22" -> 22
// "MArta"-> NaN (not a number )


//usando if/else
// if(edad >18){

//     console.log("la persona es mayor a 18 años")
// }else{
//     if(edad ==18){
//         console.log("la persona tiene 18 años")
//     }else{
//         console.log("la persona es menor a 18 años")

//     }
// }

// alternativa 2

// if(edad >=18){
//     if(edad ==18){
//         console.log("la persona tiene 18 años")
//     }else{
//      console.log("la persona es mayor a 18 años")

//     }
// }else{
//     console.log("la persona es menor a 18 años")
// }

//alternativa 3

// if(edad ==18){
//     console.log("la persona tiene 18 años")
// }
// if(edad > 18){
//     console.log("la persona es mayor a 18 años")
// }else{
//      if(edad<18){
//          console.log("la persona es menor a 18 años")
//     }
// }

//
// if(edad ==18){
//     console.log("la persona tiene 18 años")
// }
// if(edad > 18){
//     console.log("la persona es mayor a 18 años")
// }else if(edad<18){
//          console.log("la persona es menor a 18 años")
//     }

//alternativa 4

//sintaxis: condicion? accion-true : accion-false ;

// edad >=18?edad == 18?console.log("la persona tiene 18 años"):console.log("la persona es mayor a 18 años"): console.log("la persona es menor a 18 años");

//alternativa 5

// edad>18?console.log("la persona es mayor a 18 años"): console.log("la persona es menor a 18 años");
// edad ==18?console.log("la persona tiene 18 años"):"";

//operadores de comparacion > < >= <= == ===  !== != 
//          "18"
// edad != 18//compara valor
// edad !== 18//compara valor y tipo

//agregando mas detalles ....


// if(isNaN(edad)){
//         alert("disculpe lo ingresado no es un numero")
// }else{

//     if(edad >18){

//         console.log("la persona es mayor a 18 años")
//     }else{
//         if(edad ==18){
//             console.log("la persona tiene 18 años")
//         }else{
//             console.log("la persona es menor a 18 años")

//         }
//     }

// }
//isNaN(dato) -> booleano indicando si lo colocado entre parentesis es o no un NaN


/*

3. Confeccionar un programa que pida por medio de un prompt() tres notas de un alumno, calcule el promedio e imprima alguno de estos mensajes:
• Si el promedio es >=7 mostrar "Promocionado". 
• Si el promedio es >=4 y <7 mostrar "Regular".
• Siel promedioes <4 mostrar“Reprobado”.
*/

//pedir 3 notas del alumno ??? prompt()
//calcular el promedio ->(nota 1 + nota 2 + nota 3) / 3
//mostrar el string "Promocionado","Regular"  o“Reprobado”

let nota1=parseFloat(prompt("Ingrese la primer nota del alumno"));//string que transformo en un number
let nota2=parseFloat(prompt("Ingrese la segunda nota del alumno"));//string que transformo en un number
let nota3=parseFloat(prompt("Ingrese la tercera nota del alumno"));//string que transformo en un number


let promedio=(nota1+nota2+nota3)/ 3;//una suma y una division

//console.log("el promedio es"+promedio)//concatenacion


//---
if(promedio >=7){
    console.log("Promocionado")
}else{
    if(promedio >=4){
        console.log("Regular")
    }else{
        console.log("Reprobado")
    }
}

//---- alternativa 2

// if(promedio >=7){
//     console.log("Promocionado")
// }else if(promedio >=4 && promedio <7){
//     console.log("Regular")
// }
// if(promedio<4){
//     console.log("Reprobado")
// }