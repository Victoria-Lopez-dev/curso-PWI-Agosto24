import { useEffect,useState } from "react"

export default function Nav() {
    const [data,setData]=useState("1");
    const[menu,setMenu]=useState("bg-info")

    useEffect(()=>{
        console.log("accion realizada una vez renderizado el componente")
    },[]) //se ejecuta apenas se renderiza el componente 

    useEffect(()=>{
        setMenu("bg-warning")
        console.log("modificacion cuando cambia data")
    },[data])//ejecuta cada vez que vea que el estado data cambia su valor
    useEffect(()=>{},[data,menu])

    return(
        <nav>
            <ul className={menu}>
                <li> item menu</li>
                <li> item menu</li>
                <li> item menu</li>
            </ul>
            <button onClick={()=>setData("2")}>{data}</button>
        </nav>
    )
}
//Hook -> ejecutar funciones en distintos momentos de la vida del componente
//sintaxis:  useEffect(()=>{ },[])
//[] -> ejecutar cuando se renderize por primera vez el componente
//[referencia]->cada vez que esa referencia se modifique, se va a ejecutar la funcion que esta definida en el useEffects