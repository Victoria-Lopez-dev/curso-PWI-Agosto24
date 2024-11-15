## REACT
# dos maneras para crear una plantilla de un proyecto en React
# 1ra manera -> comando npx create-react-app nombre-proyecto

va a crearme una plantilla del proyecto base 
para correrlo -> npm run start 

dentro del proyecto:

 - .gitignore -> indicamos dentro que documentos o carpetas no cargar al repositorio al momento de usar git (que tiene que ignorar git)

se suele entre otros documentos, agregar el node_modules para que no lo suba al repositorio, ya que al utilizar node puede al descargarse instalar nuevamente el modulo.

cuando me descargo un proyecto que usa node,para descargarme todas sus dependencias (sus modulos) uso el comando npm install
npm install -> va a la lista de dependencias que esta en el package.json y las instala 

## Dentro de la plantilla creada por create-react-app
- carpeta "public" -> contiene todos los archivos estaticos del sitio : imagenes , index.html
- gitignore -> archivos/carpetas a ignorar al cargar con git
- package.json _> "lista" con info y dependencias del sitio
- package-lock.json
- README -> documento "block de notas" con info sobre el funcionamiento del sitio

- carpeta "src" -> componentes - documentos dinamicos


# 2 manera -> vite -> npm create vite@latest nombre- proyecto -- --template react
va a crearme una plantilla del proyecto base 
 en vez de correr con : npm run start usa el comando npm run dev
 1- npm create vite@latest nombre- proyecto -- --template react
 2- entro en la terminal dentro del proyecto creado 
 3 -ejecuto npm install
 4- npm run dev para reproducir


 ## IMPORTANTE

el sitio se va a reproducir siempre que este corriendo el programa (ya sea con npm run dev o npm run start )
cuando ya no quiero reproducirlo mas, en la terminal pulso las teclas control+C (corta la ejecucion )