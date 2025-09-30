import { useState } from "react";


const Counter = () => {
    const [ count, setCount ] = useState(0); // the counter starts at 0



    return (
        <div>
            <p>The counter is: { count }</p>

            <button onClick={ () => setCount(count + 1)}>Incrementar</button> 
            <button onClick={ () => setCount(count - 1)}>Decrementar</button> 
        </div>
    )
}

export default Counter;