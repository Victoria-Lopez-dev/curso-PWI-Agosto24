import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';//trae el componente App
import Nav from './componentes/navegacion/navegacion.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <App />{/* renderiza / reproduce el componente App (componente ejemplo que creo create-react-app) */}
    <Nav/>
    <Nav/>
    </React.StrictMode>
);


