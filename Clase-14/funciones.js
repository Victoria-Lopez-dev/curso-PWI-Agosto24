//funciones :conjunto de instrucciones que me permite poder ejecutarlas cada vez que necesito

//definir(crear las funciones ): trandicional o funcion flecha
//tradicional
/*
    sintaxis:

    function nombre(){
        accion/es - instrucciones a ejecutar
    }
*/
let nombrePersona="Juan";//variables globales

function calificarAlumno(){

    let nota1=parseFloat(prompt("Ingrese la primer nota del alumno"));//variables locales que existe solamente dentro de la funcion
    let nota2=parseFloat(prompt("Ingrese la segunda nota del alumno"));
    let nota3=parseFloat(prompt("Ingrese la tercera nota del alumno"));
    

    let promedio=(nota1+nota2+nota3)/ 3;
    if(promedio >=7){
        let dato="HOLA";//variable local que existe dentro de este if
        console.log(dato)
        console.log(nombrePersona+" esta Promocionado")
    }else{
        if(promedio >=4){
            console.log(nombrePersona+" es Regular")
        }else{
            console.log(nombrePersona+" esta Reprobado")
        }
    }
   
}


//funcion flecha -> arrow function(la clase que viene )
/*
    ()=>{
         accion/es - instrucciones a ejecutar

    }
*/

//ejecutar funciones - invocarla
//sintaxis nombre()

console.log(nombrePersona);

calificarAlumno();
// calificarAlumno();