// React-> libreria 
//componetizacion 
console.log("inicio...")

//document.querySelector("a").textContent="cambio contenido"

//node -> ejecutar JS sin la necesidad de un browser/un HTML

//para ejecutar archivos : node archivo ( siempre estar posicionados dentro de la carpeta donde se encuentra el archivo)

//npm -> node pakage manager
//instalar modulos en nuestros proyectos
// npm install modulo
//npm i modulo 

//npm init || npm init -y (crear el package.json y la carpeta node_modules al instalar paquetes )

//node_modules -> contiene todos lo modulos instalados en el proyecto
//package.json -> info sobre el proyecto y sobre las dependencias del mismo (los modulos instalados necesarios para funcionar )
let validator = require('validator');//require()-> ir a buscar un conjunto de funciones que se encuentre en otro documento.
//si no utilizo ningun ruteo,comprende que ese conjunto de funciones se encuentra dentro de node_modules
let dato=validator.isEmail('foobar.com');
console.log(dato)


//REACT

//1 manera -> comando npx create-react-app nombre-proyecto

//va a crearme una plantilla del proyecto base 
//para correrlo -> npm run start 

//dentro del proyecto:

//.gitignore -> indicamos dentro que documentos o carpetas no cargar al repositorio al momento de usar git (que tiene que ignorar git)

//se suele entre otros documentos, agregar el node_modules para que no lo suba al repositorio, ya que al utilizar node puede al descargarse instalar nuevamente el modulo.

//cuando me descargo un proyecto que usa node,para descargarme todas sus dependencias (sus modulos) uso el comando npm install
//npm install -> va a la lista de dependencias que esta en el package.json y las instala 