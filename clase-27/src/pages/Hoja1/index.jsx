import {Link} from 'react-router'

export default function Hoja1() {
    return(
        <>
                <h1>Pagina principal</h1>
                <Link to={"/secundaria"}> Ir a pagina secundaria</Link>
        </>
    )
}