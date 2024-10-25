//bucles - ciclos - estructuras de repeticion
//repetir varias veces accion/es
//for | for-of | while | do-while
//Nativas de JS : forEach() | map() | filter() | find()
// indice               0           1       2       3
//lenght                1           2       3       4
let listaProductos=["pantalon","remera","buzo","campera"];
//lengh -> indice+1

// si quiero llamar a un item de la lista -> array[indice]
// console.log("tenemos el producto "+listaProductos[0])
// console.log("tenemos el producto "+listaProductos[1])
// console.log("tenemos el producto "+listaProductos[2])
// console.log("tenemos el producto "+listaProductos[3])

///---------- for

/*
siempre que la condicion me de true, repite la/s accion/es dentro de los parentesis
accion-inicial -> accion que realiza una unica vez  antes de arrancar con el bucle
accion-por-vuelta -> accion que se ejecuta cada vez que termina de realizar las acciones que estan dentro de las llaves 
sintaxis :
for(accion-inicial;condicion;accion-por-vuelta){
    accion/es a repetir
}

*/
//quiero que salude 5 veces
//          1       6<=5    vuelta=5+1
// for(let vuelta=1;vuelta<=5;vuelta=vuelta+1){
//     console.log("Hola Mundo!")
// }

// //                                  indice=indice+1 -> indice++
// for(let indice=0;indice<3;indice++){
//     //console.log("tenemos el producto "+listaProductos[2])
//     console.log("tenemos el producto "+listaProductos[indice])
// }
//....


//pida un producto y si ese producto no esta en la lista lo agregue 
 //let productoNuevo=prompt("ingrese un producto");
let estaEnLista=false//variable global
//let listaProductos=["pantalon","remera","buzo","campera"];

//armo un bucle para saber si algun valor esta en la lista

// for(let indice=0;indice<listaProductos.length && estaEnLista == false;indice++){
//     if(listaProductos[indice] === productoNuevo){
//         estaEnLista=true//cambiamos el contenido de la variable
//     }
// }

// if(estaEnLista == false){
//     listaProductos.push(productoNuevo)
// }
// console.log(listaProductos)

// //-- alternativa

function buscarPalabra() {
    for(let indice=0;indice<listaProductos.length ;indice++){
        if(listaProductos[indice] === productoNuevo){
            estaEnLista=true//cambiamos el contenido de la variable
            return//le ponemos el return para que corte la ejecucion
        }
    }
}
//console.log(vuelta) -> no existe porque es una variable local


///---------- for-of 

//se aplica siempre en listas (array - arreglos)
//recorre TODA la lista 
/*
for(ref of array){
accion/es a repetir
}
*/
//
let ventasTotales=[2000,3000,4000,550]
let gananciaDia=0;


// for(let venta of ventasTotales){
//     gananciaDia=gananciaDia+venta
// }
// console.log("se recaudo:$"+gananciaDia)


///---------- while ( "mientras")

/*
sintaxis 

while(condicion){
    accion/es a realizar siempre que la condicion de true
}
*/

// for(let vuelta=1;vuelta<=5;vuelta=vuelta+1){
//     console.log("Hola Mundo!")
// }
let nombres=[];
//let nuevoNombre=prompt("Ingrese un nombre")

// while(nuevoNombre != 'fin'){
//     nombres.push(nuevoNombre);
//     nuevoNombre=prompt("Ingrese un nombre o la palabra 'fin' para finalizar")
// }
// console.log(nombres)


///---------- do -while ("hacer mientras")
//ejecuta aunque sea 1 vez la accion
//primero acciona y despues se fija la condicion para volver a repetirla
/*
do{
    accion/es a repetir
}while(condicion)

*/
// do{
//     nombres.push(nuevoNombre);
//     nuevoNombre=prompt("Ingrese un nombre o la palabra 'fin' para finalizar")

// }while(nuevoNombre != 'fin')
//     console.log(nombres)


// for - for/of - while - do/while 
//fo/of -> es el unico que solo funciona en array
// la condicion me tiene que dar true para que se repita y en algun momento false para que se deje de repetir


//Nativas de JS funcionan solo con arrays(listas-arreglos) : forEach() | map() | filter() | find()


    //forEach -> variante del for-of
/*
sintaxis:
array.forEach((ref)=>{
    accion/es a repetir
    })
    ref -> parametro/referencia a cada item del array 
    recorre todo el array completo
*/
    //con forEach
ventasTotales.forEach((venta)=>{
    gananciaDia=gananciaDia+venta
})
//con for of
// for(let venta of ventasTotales){
//     gananciaDia=gananciaDia+venta
// }

console.log("se recaudo:$"+gananciaDia)



//map() -> me permite hacer una accion por cada item de la lista armandome una copia con las modificaciones 
/*
sintaxis :
array.map((ref)=>{
    return accion/es a realizar})
*/

let dias=["Lunes","Martes","Miercoles"];

let nuevoArray=dias.map((dia)=>{
        return dia+" de 8 a 12hs"
})
console.log(dias)
console.log(nuevoArray)

//filter()-  filtrar  find() - buscar
//let ventasTotales=[2000,3000,4000,550]
//filter me filtra entre todos los valores del array y me arma una nueva lista con estos


let ventasChicas= ventasTotales.filter((venta)=>{ 
        return venta <1000//550<1000
    }
);
//[]

console.log(ventasChicas);

//fin() -> nos trae el primer valor de la lista que comple con esa condicion

let resultado = ventasTotales.find((venta)=> {return venta<3000})
console.log(resultado)

let resultado2= ventasTotales.filter((venta)=> {return venta<3000})
console.log(resultado2)

