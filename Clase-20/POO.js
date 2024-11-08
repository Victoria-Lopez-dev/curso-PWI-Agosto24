/*
POO ( Programacion Orientada a Objetos)
paradigma de programacion ( metodologias/maneras de resolver un problema)
nos enfocamos en los actores intervinientes 

caracteristicas y comportamientos 
*/
//ejemplo un programa para la Veterinaria

function cobrar(medicamento,honorarios) {
    let total=medicamento+honorarios;
    return "tiene que pagar "+ total
}


//creo el molde de mi entidad -> class
let listaDePacientes=[];

class Recepcionista{
    /* caracteristicas*/ 
    constructor(emailRecep,diasRecep,nombreRecep){
        this.email=emailRecep
        this.dias=diasRecep
        this.nombre=nombreRecep       
    }

    /*  comportamientos - capacidad */
    cobrar(medicamento,honorarios) {
        let total=medicamento+honorarios;
        console.log(total)
        return "tiene que pagar "+ total
    }
    listaParaAtender(paciente){
        listaDePacientes.push(paciente)
    }
}

class Veterinario{
    nombre="..."
     email="...@veterinaria.com"

    atender(){
        console.log("atendiendo al paciente...")
    }
}

//instancias de una clase donde le pase informacion particular de cada clase (de cada recepcionsta)
let recepcionista1= new Recepcionista("joaquin@veterinaria.com",["lunes","miercoles"],"Joaquin");
let recepcionista2= new Recepcionista("marta@veterinaria.com",["martes","jueves"],"Marta");
recepcionista1.cobrar(200,100)

console.log(recepcionista1.email)
console.log(recepcionista2.email)

//constructor -> nos permite 



//----------- sin POO 

function cobrar(medicamento,honorarios) {
    let total=medicamento+honorarios;
    return "tiene que pagar "+ total
}
function listaParaAtender(paciente){
    listaDePacientes.push(paciente)
}
cobrar(2001,100)
// if(usuario === "repecion"){
//     cobrar()
// }


//proxima clase -> JSON - asincronias -intro React
