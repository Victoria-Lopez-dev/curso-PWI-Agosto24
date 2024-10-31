//DOM -> Document Object Model 
let alumnos=["Marta","Juan","Agustin"]
//nombre edad cursos
//Objeto -> relacionar datos ,describir entes
//key/clave - valor(cualquier tipo de valor )
// utiliza {} para englobar su contenido

//definiendo un objeto - almancenando en una variable "alumno1"
let alumno1={
    ["nombre"]:"Marta",
    edad:22,
    cursos:["React","PWI"],
    regular:true,
    domicilio:{
        calle:"Calle 123",
        localidad:"Lanus",
    }
    
}

//acceder a una propiedad del objeto
//sintaxis: objeto.propiedad - objeto[propiedad]
console.log(alumno1.regular)

//otra manera de llamar a propiedades

console.log(alumno1["regular"])

//alert("Hola "+ alumno1.nombre)

console.log(alumno1.domicilio.localidad)

//modificar un valor
//sintaxis: objeto.propiedad= nuevoValor


alumno1.edad= 33

//alternativa

alumno1["edad"]=33


//ejemplo donde generalizamos el cambio de una propiedad a un objeto y damos aviso por consola de ese cambio
//

let cambioDePropiedad=(propiedadDelObjeto,nuevoValor)=>{

    alumno1[propiedadDelObjeto]=nuevoValor;
    //alumno1["edad"]=44

    console.log("se modifico la propiedad "+ propiedadDelObjeto)
}

cambioDePropiedad("edad",44)

console.log(alumno1)

//crear una nueva propiedad/key/clave
//sintaxis: objeto.nuevaPropiedad= valor

alumno1.apellido="Gomez"

cambioDePropiedad("apellido","Sanchez")
//eliminar propiedad
//sintaxis delete objeto.propiedad

delete alumno1.regular

alumnos=[alumno1,{nombre:"Juan",edad:55}]
console.log(alumnos);


//ejemplo funcion convinada (array - objetos )

let productos=[{
    producto:"remera",
    cantidad:33,
    precio:1000
},{
    producto:"pantalon",
    cantidad:22,
    precio:2000
},{
    producto:"zapatillas",
    cantidad:10,
    precio:3000
}
]

console.log(productos)

//traer el nombre del producto que tenga menos de 15 unidades

//array de objetos (lista de objetos)

//buscar entre los items de la lista el que tenga una cant <15

//find() -> metodo de JS que nos devuelve el primer item de la lista que cumple con la condicion definida

let resultado=productos.find((prod)=>{return prod.cantidad <15});

console.log(resultado)

