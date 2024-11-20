export default function name(params) {
    console.log("hola")
}
//me permite exportar name
//destructing 

let lista=[1,2,3,4,5];
let persona={
    nombre:"Marta",
    apellido:"Gomez",
    edad:20,
    data:{dataB:"hola"}
};

let apellido2=persona.apellido;//"Gomez"

let {apellido}=persona//del objeto persona  crea una variable "apellido" con el mismo valor de esa propiedad
let {edad}=persona
//otra manera
//let {apellido,edad}=persona


//obteniendo informacion de un objeto dentro de otro objeto 
let obteniendoDataB=persona.data.dataB;
console.log(obteniendoDataB);
let{dataB}=persona.data;
console.log(dataB)


let[pepe,indice1,data]=lista//crae variables y coloca en ellas los valores segun su indice (iniciando desde el indice 0)
let data2=lista[2]


console.log(apellido,edad)
console.log(data)
//spread operator -> tres puntos que me permiten indicar el contenido de la lista sin sus corchetes

let nuevaLista=[...lista,55];
let[data1,...info]=lista

console.log(info)

//obtener con destructing solamente el de indice 2