export default function Filter({title,filtar}){

    return(
        <div className='text-white form-check form-switch bg-success col-2 '>
            <input className='form-check-input' id={title} type='checkbox' onClick={(event)=>filtar(event.target)} value={title}/>
            <label className='form-check-label' htmlFor={title}>{title}</label>
        </div>
    )
}

//<label for="mismo">Referencia..</label>
//<input id="mismo"/>
//event.target -> contiene la informacion del nodo(elemento) en el que ocurrio el evento (en este caso nos trae informacion del inputo en donde se hizo "click")