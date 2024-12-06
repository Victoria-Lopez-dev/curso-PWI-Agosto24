import{BrowserRouter as Router,Routes,Route} from 'react-router';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Contact from './pages/Contact/Contact'


export default function RouterSite() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Characters' element={<Characters/> }/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </Router>
    )
}

//primero instalo el paquete npm i react-router
//luego armo el componente o el array de objeto "route"
