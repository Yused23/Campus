import "./Formulario.css"
import { useState } from "react"

export function Formulario(){
    const [nombre, setNombre]= useState("")
    const [contraseña, setContraseña]= useState("")
    const [error, setError] = useState(false)


    const handleSubmit = () => {
        e.preventDefault ()

        if(nombre == "" || contraseña == ""){
            setError(true)
            return
        }

        setError(false)
    }

    return(
        <section>
            <h1>Login</h1>

            <form 
                className="formulario" 
                onSubmit={handleSubmit}
            >
                <input className="input" 
                type="text" 
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />
                <input className="input" 
                type="password" 
                value={contraseña}
                onChange={e => setContraseña(e.target.value)}
                />
                <button className="boton">Iniciar Sesion</button>
            </form>
            {error && <p className="error">Todos los campos son obligatorios</p>}
        </section>
    )

}