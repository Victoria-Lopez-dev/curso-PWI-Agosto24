let nombre='Juana';
const total=333;


console.log("Hola "+nombre);

//Arreglos - Arrays - Listas -> 
// corchetes [] cada item los voy a separar con una coma (excepto el ultimo item)
//podemos hacer lista con cualquier tipo de datos
//no hay limite 
let lista=[333,true,"hola"]
//indice                0       1           2   3
const nombresPersonas=["Marta",nombre,"Miriam","Luca"];
const listaPrecios=[];

console.log(nombresPersonas)
console.log("Hola "+nombresPersonas[2])
console.log("Hola "+nombresPersonas[3])
//indice
//length (largo) -> cantidad de items  (metodo de JS)
//sintaxis lista.length

//el numero mas alto del indice es el largo-1

console.log(nombresPersonas.length)//me devuelve en tipo number la cantidad de items de la lista
console.log(nombre.length)//me indica la cantidad de caracteres



//acceder a un item de la lista -> sintaxis: lista[indice]


//modificar la lista -> metodos | sintaxis: lista.metodo(valor)

//agregar items a la lista:  push() - unshift()

//push agrega al final de la lista 
// let nuevoNombre=prompt("Ingrese un nombre")
let nuevoNombre="Macarena"

nombresPersonas.push("Nahuel","Lautaro",nuevoNombre)
nombresPersonas.push("Florencia")


//unshift agrega al inicio de la lista

nombresPersonas.unshift("Alfredo")

console.log(nombresPersonas);


//sacar items de la lista : pop() shift()
//pop() sacar el ultimo item de la lista
//shift - sacar el primer item de  la lista

nombresPersonas.pop()

nombresPersonas.shift()
console.log(nombresPersonas);

//splice(indice, cantidadASacar, nuevoValor)
//nuevoValor es opcional 

// nombresPersonas.splice(3,1) -> saca a Luca

nombresPersonas.splice(3,1,"Lucas")

nombresPersonas.splice(2,3,"Dahiana","Augusto","Laura","Sofia")




//slice(indiceInicio,indiceFinal) -> "cortar" una parte del array ,no incluye el indiceFinal

console.log(nombresPersonas.slice(3,6))//me muestra a Augusto,Laura y Sofia
console.log(nombresPersonas);
//nombresPersonas=[1,2,23]//me da error por que no podemos redefinir una  variable de tipo const