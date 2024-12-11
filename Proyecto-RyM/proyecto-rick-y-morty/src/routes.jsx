import{BrowserRouter as Router,Routes,Route} from 'react-router';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Contact from './pages/Contact/Contact';
import CharactersProvider from './context'//llamo al provider y lo aplico en Characters para que ese componente (pagina) y sus desendientes puedan utilizarlo y modificarlo en caso de ser necesario


export default function RouterSite() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Characters' 
                element={<CharactersProvider>
                            <Characters/>
                        </CharactersProvider> }/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </Router>
    )
}

//primero instalo el paquete npm i react-router
//luego armo el componente o el array de objeto "route"
