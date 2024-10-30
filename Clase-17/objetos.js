//producto y precio 

//productos que se lleva
//precio 

let productoSeleccionado=["remera","pantalon","campera","zapatilla"];
let precioProductos=[10000,4000,33000,20000];

let productosAdquiridos=["remera",10000,"pantalon",4000,"campera",20000,"zapatilla",33000];

//Objetos -> describo una entidad, los valores se relacionan
//simbolo {} y dentro tiene un par que es propiedad:valor | key:value| clave:valor
//como valor puede ser cualquier cosa : string,number,boolean,array,variable....
//nombres de la propiedad/key 
//no se puede agregar propiedad sin valor 

/*
sintaxis:
{
    propiedad:valor,
    propiedad:valor
}

*/


let remera={
    nombre:"remera",
    marca:"Juanito",
    precio:10000,
    colores:["rojo","azul","verde"],
    descuento:true
}

let pantalon={
    nombre:"pantalon",
    marca:"pepito",
    precioUno:4000,
    descuento:false
}
let campera={
    nombre:"campera",
    marca:"blabla",
    precio:20000,

}
let persona={
    apellido:"Gomez",
    edad:22,
    domicilio:"Calle Falsa 123"
}

console.log(remera)

//acceder a los valores de un objeto
//sintaxis : objeto.propiedad

console.log(pantalon.precioUno)
console.log(remera.marca)

//modificar una propiedad ya existente de un objeto

//sintaxis : objeto.propiedad=nuevoValor

pantalon.descuento=true;



// crear una nueva propiedad
//sintaxis: objeto.nuevapropiedad=valor
pantalon.talles=["1","2","10"];


//eliminar una propiedad
//sintaxis : delete objeto.propiedad
delete pantalon.marca

console.log(pantalon)
let listaFinalProductos=[remera,pantalon,campera]
console.log(listaFinalProductos)

//proxima clase DOM -Eventos | intro POO