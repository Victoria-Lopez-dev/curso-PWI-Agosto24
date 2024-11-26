export default function Boton({valor,setData}) {
    return(
        <button onClick={()=>{setData(valor)}}>Cambiar a {valor}</button>
    )
}