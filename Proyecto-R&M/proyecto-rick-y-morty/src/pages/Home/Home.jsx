import ButtonsHome from '../../components/ButtonsHome/ButtonsHome'

import './home.css'


export default function Home() {
    return(
        <div className='d-flex justy-content-center align-items-center mt-4'>
            <div className='container fondo-blanco p-5'>
                    <h1 className="titulo row">Proyect Rick & Morty</h1>
                    <h2 className='row'>Welcome to Rick & Morty Proyect!</h2>  
                    <p className='row'>This proyect was made for practising React and to made a functional website. </p> 

                    <p className='row'>In this website you can know information of the characters of this animated series. </p> 
                    
                    <p className='row'>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.
                    </p>     
                    <p className='row'>Lets go!</p> 
                    <div className='row'>
                        <ButtonsHome contenido="Characters"/>
                        <ButtonsHome contenido="Contact"/>           
                    </div>

                </div>        
        </div>
   

    )
}