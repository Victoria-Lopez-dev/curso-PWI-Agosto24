let dato = "hola soy un string";
'true'//string 
true //booleano

dato = "222";//definiendo el valor de la variable
console.log(dato);

//operaciones: Aritmeticas(+ - * / Math) - de Comparacion (== ,===, !== ,>, < ,>= ,<=)devuelve booleano - Logicas( && ,||, !) devuelve booleano

dato == 222;//comparando solo el valor - true
dato === 222//comparando el valor y el tipo de dato - false

let edad=18
// const edad =prompt("ingrese su edad en numeros");
let ticketsDisponibles=true

// edad>=16 && ticketsDisponibles === true;

//prompt() -> herramienta inicial 

//Condicionales :

//1.----- operadores ternarios 

/*
- estructura en una sola linea de codigo 
- si o si necesito indicarle una accion en caso que se cumpla la condicion , como en caso que no se cumpla.

-condicion -> tiene que devolverme un booleano (operador de comparacion o logico )

sintaxis:

condicion ? accion-true : accion-false;


*/
  
    // edad>=16 ?ticketsDisponibles === true ? console.log("se puede vender entrada"):console.log("no tenemos mas entradas =( disculpanos"): console.log("sos menor, no te podemos vender");


    edad>=16 ?console.log("es mayor de edad"):console.log("es menor de edad");

//usuarioIngresado === usuarioRegistrado && passwordIngresada == passwordRegistrada

//2.----- if-else | if

/*
- multiples acciones
-multiples lineas de codigo
-if : "si" , else : "sino"
- solamente si quiero puedo utilizar la seccion del if() sin el else 
sintaxis: 

if(condicion/valor true o false){
    accion/es si se cumple la condicion (true)
}else{
 accion/es si no se cumple la condicion (false)
}

*/
if(edad>=16 ){
    console.log("es mayor de edad");

}else{
    console.log("es menor de edad");
};

//------------

if(edad>=16){
    edad=edad+33;
    //if(ticketsDisponibles == true) es lo mismo  if(ticketsDisponibles)
    if(ticketsDisponibles){
        console.log("se puede vender entrada");
    }else{
        console.log("no tenemos mas entradas =( disculpanos");
    };
}else{
    console.log("sos menor, no te podemos vender");
    
};

//otra alternativa

if(edad>=16 && ticketsDisponibles){
    console.log("se puede vender entrada");
}else{
    if(edad<16){ console.log("sos menor, no te podemos vender");

    }else{
        console.log("no tenemos mas entradas =( disculpanos");
    }

}
//otra alternativa
if(edad>=16 && ticketsDisponibles){
    console.log("se puede vender entrada");
}else{
    console.log("no te puedo vender por que no se complen las condiciones")

}

// quiero saber si compro mas de 4 productos para hacerle un descuento de $1000

// let cantidadProductos=prompt("ingrese la cantidad de productos");
let cantidadProductos=4
let totalPrecio=3000;
let diaMartes=false

//          false
if(cantidadProductos>4){

    totalPrecio=totalPrecio-1000//ahora la variable totalPrecio vale su contenido menos 1000
}


//      true 
if(diaMartes){
    totalPrecio=totalPrecio-500;
    console.log("Hoy tenes descuento!!!!")
}
console.log("total a pagar " +totalPrecio)

//mezclando un poco todo si quiero...

// if(cantidadProductos>4){
//     cantidadProductos>10? console.log("mucho descuento"): console.log("algo de descuento")
// }


//3.----- switch

/*
sintaxis: 
    switch (expresion) {
        case valor:
            accion/es a realizar
            break;
        case valor:
            accion/es a realizar
            break;
        default:
            break;
    }
        *///ejemplo

 let diaDeLaSemana=prompt("Ingrese dia de la semana").toLowerCase()//pidiendo por medio de un prompt() que ingrese el dia de la semana y luego con el toLowerCase, transformando ese string en minuscula

// // if(diaDeLaSemana === "Lunes"){
// //     console.log("descuento del 5%")
// // }
// // if(diaDeLaSemana === "Martes"){
// //     console.log("descuento del 10%")
// // }
// // if(diaDeLaSemana === "Miercoles"){
// //     console.log("descuento del 15%")
// // }
// // if(diaDeLaSemana === "Jueves"){
// //     console.log("descuento del 20%")
// // }
// // if(diaDeLaSemana === "Viernes"){
// //     console.log("descuento del 25%")
// // }
// //usando switch

switch(diaDeLaSemana){
    case "lunes":
        console.log("descuento del 5%")
        break;
    case "martes":
        console.log("descuento del 10%");
        //multiples acciones...
        break;  
    case "miercoles" :     
        console.log("descuento del 15%")
    break; 
    case "jueves":
        console.log("descuento del 20%")
    break; 

    case "viernes":
        console.log("descuento del 25%")
    break; 
    default:
        console.log("no hay descuento ese dia")
        break;
}
//...

// recomendacion:
//arriba colocar todas las definiciones de las variables (globales)
//despues todas las acciones 
//primero defino las variables , despues las uso

//funciones nativas

//herramientas creadas por JS para que la utilicemos 

//console.log()
//prompt()
// alert() -> cartel de alerta 
//alert("este es un cartel de alerta!!!")

//transformar de un tipo de dato a otro:

// parseInt() transforma lo que coloquemos dentro en un numero entero
// - parseFloat()transforma lo que coloquemos dentro en un numero decimal
//Number()

parseInt(dato)// 222
parseInt("hola")//me devuelve NaN
//valor.toLoweCase()//hacer que un string se vuelva todo en minuscula
//valor.toUpperCase()//hacemos que un string se transforme todo en mayuscula