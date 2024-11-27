import './tarjeta.css'

export default function Tarjeta({persona}) {

    return(
        <div className='tarjeta'>
            <h3>{persona.nombre}</h3>
            <ul>
                <li>{persona.edad}</li>
                <li>{persona.correo}</li>
                <li>dni nro: {persona.dni}</li>
            </ul>
        </div>
    )
    
}