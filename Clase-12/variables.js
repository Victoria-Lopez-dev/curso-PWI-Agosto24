//Variables
//definirlas(crearlas )

/* sintaxis :

res nombre = valor;

res : let - const -var

//let -> no nos va a permitir crear dos variables con el mismo nombre pero puedo cambiar su valor a lo largo del documento 

//const -> constante : no nos permite crear mas de una variable con el mismo nombre y no me permite cambiar el valor de la variable a lo largo del documento 

nombre de variables:
 -> sin espacios(camelCase - snakecase)
->no puede arrancar con un numero 
 */

let persona="Juan";
const dato1=33;

let total=10;
var verdadero=true;
var verdadero="verdadero";

//utilizar - ejecutar - invocar
console.log(verdadero)
console.log(dato1+22)

//modificar el valor almacenado en una variable
//sintaxis -> nombre=nuevoValor;

persona=true;
total=total+20//30
console.log(total)
//dato1=44 -> nos tira error ya que esta definida como una constante y no podemos modificarla