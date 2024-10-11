//Comentarios en una misma linea
/* Comentarios 
en multiples 
lineas */

//tipos de datos 
//caracteres alfanumericos -> Strings
"Hola soy un texto "
// `Admin123`
'Juan'
// comillas : " ", '', `` (bastics - template literals - acento frances)


//numeros -> Numbers

12397
12.5 //12 y medio
12,5 // 12 y numero 5
NaN
// verdadero falso -> Boolean/Booleanos

// utiliza 2 palabras reservadas :
false //-> valor falso
true // ->valor verdadero 

//por otro lado , otras palabras reservadas (que no son booleanos)son:
NaN //Not a Number -> tipo de dato numerico que indica que no es un numero lo obtenido,no tiene su valor en numeros 
null// valor nulo
undefined//no esta definido 

"222" // string
"true"//string
true //boolean
222 //number

//console -> ver por la consola (del browser o la terminal ) lo que necesitemos

console.log("Hola Mundo!!")

console.log(22)
console.log(true)

//----------------------------------------------------------
let numero=19;
let persona="Juan";
let edadUsuario=44;

//Operadores 

//-----
//aritmenticas
//calculos por medio de los simbolos: + ,- ,*,/

33+22//55
console.log(33/22 )
33* "hola"//NaN
numero+22
numero+"22"
console.log("te damos la bienvenida "+ persona)
//al hacer una suma con un string -> concatenacion

//mas complejo -> dentro de Math : Math.cos/log/etc..

//true -> 1 false ->0

//-----
//de comparacion
//nos permite comparar cosas y lo que nos va a devolver booleanos
//simbolos -> == | === | > | < | >= | <= | != | !==

//igualdad ( no usamos igual simple ya que este lo utilizan las variables )
//doble igual -> valor 
//triple igual -> compara valor y tipo de dato

"55" == 55 //true
2+2 == 55 //false
persona == "marta" //falso
persona== numero 
 
"55" === 55 //false
persona === "Juan" 

//desigualdad -> != | !==
//!= -> valor 
//!== -> compara valor y tipo de dato

"55" != 55// compara el valor, al ser el mismo me da false
"55" !== 55 //compara el valor y el tipo de dato -> me da true



// > ,< (mayor o menor) | >= , <=

5>5 // false(no incluye al valor 5)
numero <40 //true
5>=5 // true (por que incluye al valor 5)
console.log(5>=5)



//-----
//logicas -> nos van a devolver booleanos

//simbolo &&: significa and o "y"(necesito que todas mis comparaciones se cumplan para que me devuelva como resultado true)
let usuarioIngresado="usuario1";
let passwordIngresada="OTRApass";

console.log(usuarioIngresado == "usuario1" && passwordIngresada ==="pass123")


numero>40 && edadUsuario != 20 && usuarioIngresado == "usuario1"


//simbolo || : or o "o"(necesito que por lo menos una de estas comparaciones me de true para que el resultado final me devuelva true)

let edadPersona=14
let adultoResponsable=false

console.log(edadPersona>16 || adultoResponsable === true)


//simbolo ! : not o "no" (me devuelve lo opuesto)

!(edadPersona>16)
edadPersona<16

console.log(!(edadPersona>16))


//prompt()->herramienta de JS que me permite recibir data de parte del usuario por medio del browser
//prompt() siembre me devuelve el valor de tipo string
// prompt("ingrese un nombre ")

 let datoPrompt=prompt("ingrese un nombre ");

// console.log(nombre)

//puedo transformar numeros en string y string en numeros???

//transformar string en numeros 

//parseInt(string) -> numero entero| parseFloat(string) ->numero decimal |Number(string)
//si ingreso un valor que no podemos transformar a numero, me devuelve NaN
parseInt(datoPrompt)

//transformar numeros en string
//toString(number)

toString(22)//'22'


5*5 == 25 // true 
//5*5=25 estoy queriendo asignar el valor 25 a 5*5


edadPersona = 17// asignando el valor 17 a la variable ya creada edadPersona

edadPersona == 17 //comparando si la variable edadPersona es igual al valor 17



//proxima clase -> repaso + operador ternario + tema clase 13