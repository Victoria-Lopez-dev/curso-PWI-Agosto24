// import{BrowserRouter as Router,Routes,Route} from 'react-router';
// import Hoja1 from './pages/Hoja1';
// import Hoja2 from './pages/Hoja2';
// import NotFound from './pages/404'


// export default function RouterSite() {
//     return(
//         <Router>
//             <Routes>
//                 <Route path='/' element={<Hoja1/>}/>
//                 <Route path='/secundaria' element={<Hoja2/>}/>
//                 <Route path='*' element={<NotFound/>}/>
//             </Routes>
//         </Router>
//     )
// }
//"mapita" donde le indicamos segun el pasaje de la url que componente tiene que reproducir
//cuando ponemos de path "*" estamos indicando que redirigimos a ese componente cuando se coloque cualquier otro pasaje que no coincida con los definidos 

//otra alternativa

import {createBrowserRouter} from 'react-router';
import Hoja1 from './pages/Hoja1';
import Hoja2 from './pages/Hoja2';
import NotFound from './pages/404'

const router=createBrowserRouter([{
    path:"/",
    element:<Hoja1/>
},{
    path:"/secundaria",
    element:<Hoja2/>
},{
    path:"*",
    element:<NotFound/>
}])

export default router