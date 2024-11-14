## REACT

# 1 manera -> comando npx create-react-app nombre-proyecto

va a crearme una plantilla del proyecto base 
para correrlo -> npm run start 

dentro del proyecto:

 - .gitignore -> indicamos dentro que documentos o carpetas no cargar al repositorio al momento de usar git (que tiene que ignorar git)

se suele entre otros documentos, agregar el node_modules para que no lo suba al repositorio, ya que al utilizar node puede al descargarse instalar nuevamente el modulo.

cuando me descargo un proyecto que usa node,para descargarme todas sus dependencias (sus modulos) uso el comando npm install
npm install -> va a la lista de dependencias que esta en el package.json y las instala 

## Dentro de la plantilla creada por create-react-app
- carpeta "public" -> contiene todos los archivos estaticos del sitio : imagenes , index.html
- gitignore
- package.json
- package-lock.json
- README
- carpeta "src" -> componentes 