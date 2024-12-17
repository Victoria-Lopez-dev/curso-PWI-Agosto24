import './nav.css';
import {Link} from 'react-router'


export default function Navegation({pageName}) {
    return(
        <nav className='d-flex justify-content-between p-5'>
            <h1><Link to="/">Rick & Morty</Link></h1>
            <ul className='d-flex text-decoration-none m-0'>
                <li><Link to="/Characters" className={pageName === "Characters"?"activo p-2":'p-2'}>Characters</Link></li>
                <li><Link to="/Contact" className={pageName === "Contact"?"activo p-2":'p-2'}>Contact</Link></li>
            </ul>
        </nav>
    )
}
