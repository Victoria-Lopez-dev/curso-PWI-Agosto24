import './nav.css'

export default function Navegation() {
    return(
        <nav className='d-flex justify-content-between p-5'>
            <h1>Rick & Morty</h1>
            <ul>
                <li>Characters</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}