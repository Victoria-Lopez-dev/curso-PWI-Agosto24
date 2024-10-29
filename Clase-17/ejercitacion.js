/*
1- Marcelo esta armando la lista para el super. Crear un bucle para que Marcelo pueda ingresar los productos que necesite y muestre por consola la lista completa.
*/
//bucle  -> while 
//console.log()
//array
//prompt()
//if
//let
let listaSuper=[];


// // pedirle un producto a Marcelo? prompt()
// // let producto=prompt("Marcelo ingresa un producto");
// // condicion -> mientras producto !== fin 

// // agregarlo a lista
// // listaSuper.push(producto);


// let producto=prompt("Marcelo ingresa un producto");//defino una variable llamada producto (creo la variable )

// while(producto.toLowerCase() !== "fin" ){
//     listaSuper.push(producto);//agregando a la lista
//     producto=prompt("Marcelo ingresa un producto o  la palabra fin para terminar");
//     //modifico el valor de la variable ya creada "producto"
// }

//  console.log(listaSuper)

 //------------
 //do-while
// let producto;
//  do{
//     producto= prompt("Marcelo ingresa un producto o fin para terminar");
//     if(producto !== "fin"){listaSuper.push(producto)}

//  }while(producto !== "fin")

//string.toLowerCase() y  string.toUpperCase()-> transforma un string todo en minuscula(toLowerCase) o mayuscula(toUpperCase)



/*
Dado el siguiente array de países, crear un programa que le pida al usuario ingresar un nombre de país.
Luego, la funcion deberá fijarse si el país ingresado se encuentra en la lista creada a continuacion.
En caso que se encuentre, devolver un alert que diga “Pais ya registrado, se elimina del registro” y sacarlo de la lista;
En caso que no se encuentre en la lista, deberá devolver un alert que indique “Pais registrado" e ingresarlo a la lista
*/
//programa es sinonimo de funcion 
let paises=["Argentina","Peru","Bolivia","Italia","Australia"];



function buscarPais1() {
  let paisNuevo=prompt("Ingrese el nombre de un pais ") ;
    let paisEnLista=false;
    for(let pais of paises){
        if(paisNuevo === pais ){
            paisEnLista=true
        }// comparando si lo ingresado en el prompt es igual a cada uno de los items de la lista y si coincide cambio a "true" la variable paisEnLista
    }

 if(paisEnLista === true ){//evaluo si paisEnLista es true o false
    alert("Pais ya registrado, se elimina del registro")
    // lo saco de la lista 
    //saber donde esta ubicado y sacarlo ->array.splice(indice,cantidad)
    let indicePais=paises.indexOf(paisNuevo);//ubico el indice del pais
    paises.splice(indicePais,1)//busco el pais y lo saca
 }else{
    alert("Pais registrado")
    paises.push(paisNuevo) // lo agrego a la lista 
 }

 console.log(paises)//nos fijamos como quedo la lista final
}

//----- otra alternativa

function buscarPais2() {
    // como alternativa si no quiero usar el bucle for/of

    let paisEncontrado=paises.find((pais)=>{return paisNuevo === pais})
    //si lo encuentra, me va a guardar en la variable el item encontrado; si no lo encuentra guarda en la variable un undefined

    if(paisEncontrado !== undefined){
        alert("Pais ya registrado, se elimina del registro")
        let indicePais=paises.indexOf(paisEncontrado);//ubico el indice del pais
        paises.splice(indicePais,1)
    }else{
        alert("Pais registrado")
        paises.push(paisNuevo) 
    }

    console.log(paises)
}

