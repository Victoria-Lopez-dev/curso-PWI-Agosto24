/* 
Crear una variable con una nota ( que puede valer del 1 al 10) y por medio de un if/else devuelva:
”Sobresaliente” si es entre 9 y10,
“Notable” si es 8
“Bien” si el valor es 7,
”Suficiente” si es 6 ,
”Insuficiente” si es entre 1 y 5.

*/

//alternativa 1 -> let nota=parseInt(prompt("Ingrese nota : numeros enteros del 1 al 10"));
//let nota=prompt("Ingrese nota : numeros enteros del 1 al 10")


function calificacion(notaNumerica) {
 let numero=parseInt(notaNumerica);

    if(isNaN(numero)){
        return "Lo ingresado no es un numero"
    }else{
        if(numero>=9 && numero<=10 ){
            return "Sobresaliente"
        }else{
            if(numero ==8){
                return "Notable"
            }
            if(numero ==7){
                return "Bien"
            }
            if(numero == 6){
            return "Suficiente"
            }
            if(numero>10 || numero <1){
                return "lo ingresado no se encuentra dentro del rango solicitado"
               
            }
            return "Insuficiente"
            
        }        
    }

    
}

//let resultado=calificacion(nota);
//console.log(resultado)

/*
Dada la siguiente lista de objetos :
	Armar un array que contenga todos estos objetos.
Programar una funcion donde permita reducir en el stock de dicho producto  en la cantidad que se informe como parámetro y lo sume a una lista de compra la cual muestre en el navegador.
Agregar a dicha funcion que si el stock de alguno de los productos es 0 ( es decir stock=0) salte una alerta que indique “Nos quedamos sin stock de este producto
*/

let pantalon={
    nombreProd:"pantalon",
    categoria:"indumentaria",
    color:"azul",
    stock:15
}
let campera={
    nombreProd:"campera",
    categoria:"indumentaria",
    color:"verde",
    stock:5
}
let zapatilla={
    nombreProd:"zapatilla",
    categoria:"indumentaria",
    color:"negro",
    stock:20
}
/*
Agregar a dicha funcion que si el stock de alguno de los productos es 0 ( es decir stock=0) salte una alerta que indique “Nos quedamos sin stock de este producto
*/

let productos=[pantalon,campera,zapatilla];
let listaVenta=[];
let resolucion=(cantidad,productoSeleccionado)=>{
    //antes de descontar el stock, ver si tenemos stock para descontar

    if(cantidad<=productoSeleccionado.stock || productoSeleccionado.stock !== 0){
        productoSeleccionado.stock= productoSeleccionado.stock-cantidad;//modificamos el stock del producto
        let prodVendido={
                producto:productoSeleccionado.nombreProd,
                unidades:cantidad
            }
        listaVenta.push(prodVendido)  
        
        
        productoSeleccionado.stock !==0?console.log("nos queda en stock "+productoSeleccionado.stock +" unidades"): console.log("Nos quedamos sin stock de "+productoSeleccionado.nombreProd)


    }else {if(productoSeleccionado.stock == 0){
            alert("Nos quedamos sin stock de este producto")
        }else{
            alert("cantidad solicitada del producto mayor  que el de stock")
        }
        
    }}

// resolucion(20,pantalon);
// resolucion(2,zapatilla);
// resolucion(5,campera);

// console.log(listaVenta)


//brek 15min
//a la vuelta: DOM - Eventos - POO(intro)