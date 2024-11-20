export default function Seccion1() {
        const alerta=()=>{
            alert("HOLAAA")
        }
        let titulo="Seccion 1...."

    return(
        <div>
            <h2 >{titulo}</h2>
            <button onClick={alerta}>Click</button>
        </div>
        
    )
}

//cuando quiera incorporar JS en la seccion del return() necesito englobar esa parte entre llaves 