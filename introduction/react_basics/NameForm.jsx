import { useState } from "react"

export const NameForm = () => {
    const [ name, setName ] = useState("");

    return (

        <div>
            <input type="text" 
                placeholder="Ingresa tu nombre" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />

            <p>Hola, { name || "visitante" }</p>
        </div>
    )
}