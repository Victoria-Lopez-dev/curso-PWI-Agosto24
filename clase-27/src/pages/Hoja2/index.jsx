import {Link} from 'react-router'//llamo a Link del paquete react-router para poder armar el enlace desde los componentes

export default function Hoja2() {
    return(
        <>
                <h1>Otra pagina del sitio..</h1>
                <Link to={"/"} className='btn btn-primary me-2'> Ir a pagina principal</Link>
                <a href="./hojasecundaria.html">Ir a otra hoja</a>
        </>
    )
}

