const mostrarNombre=(event)=>{
    event.preventDefault()//evito que actue por defecto,queriendo enviar la data del formulario y reiniciandolo
    let valorInput=document.querySelector("#nombre");
    console.log(valorInput.value)
}

//los formulario tiene por defecto la accion de enviar la informacion a donde definamos el atributo "action"(esto se ejecuta cuando se pulsa cualquier boton que este dentro de <form>)

//preventDefault() -> metodo que vive en el objeto event que nos permite anular la accion por defecto de las etiquetas