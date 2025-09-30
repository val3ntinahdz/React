import { useState, useEffect } from "react"

export const CounterWithEffect = () => {

    const [ count, setCount ] = useState(0);

    useEffect(() => {
        console.log( `El contador cambió a ${ count }`)


        return (
            console.log("Ejecutando contador")
        )
    }, []) // Empty array means that an effect executes just once (when the component is fully rendered)


    const incrementarContador = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>The counter is: { count }</p>

            {/*  These are syntehtic events */}
            <button onClick={incrementarContador}>Incrementar</button> 
        </div>
    )

}