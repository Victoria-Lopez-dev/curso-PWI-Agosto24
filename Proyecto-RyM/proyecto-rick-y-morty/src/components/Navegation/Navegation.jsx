import './nav.css';
import {Link} from 'react-router'


export default function Navegation() {
    return(
        <nav className='d-flex justify-content-between p-5'>
            <h1><Link to="/">Rick & Morty</Link></h1>
            <ul>
                <li><Link to="/Characters">Characters</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}