//ciclos, bucles, estructuras de repeticion 

let lista=["Laura","Luis","Luciano","Miriam","Luca"];//length -> 3
let importes=[2000,4000,5000]

//for | for-of | while | do-while

//for -> util para acciones con lista o simplemente acciones que se repiten
//sintaxis:
/*
for(accion-inicial;condicion;accion-por-vuelta){
    accion/es a repetir 
}
- accion-inicial -> accion que se hace antes de - arrancar con el bucle
-condicion -> booleano que indica si tiene o no que volver a realizar la accion (se puede colocar operaciones)
-accion-por-vuelta -> accion que se va a repetir cada vez que termine de ejecutar la accion/es dentro de la llave del for
 */

for(let i=1;i<=5;i=i+1){
    console.log("Hola ") 
}

let total=0;

//i++ es lo mismo i=i+1 


for(let i=0;i<importes.length;i=i+1){
    total=total+importes[i]
    console.log("Estos en la vuelta "+ i)
}
console.log(total)

// for(let nombre=prompt("ingrese un nombre");nombre !== "fin";nombre=prompt("ingrese un nombre o fin para terminar")){
//     lista.push(nombre)
// }
// console.log(lista)
//...
//console.log(i) error ya que se crea de manera local del for


let total2=0;
//for-of  -> solamente se puede utilizar en listas y recorre todo el array (toda la lista)
/*
for(let ref of array){
    accion/es a repetir
}
*/
for(let precioLista of importes){
    total2=total2+ precioLista
}
console.log(total2)

//Nativas de JS : forEach() | map() | filter() | find()