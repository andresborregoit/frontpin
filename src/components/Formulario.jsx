import { useState } from "react";
import axios from "axios";

function Formulario(){

    const [newUser,setNewUser] = useState({nombre: "", apellido: "", correo: "", mensajeCorreo:"",  notification: false})

    const [success, setSuccess] = useState(false)

    const [error, setError] = useState(false)

    const disableSubmit = !newUser.nombre || !newUser.apellido || !newUser.correo || !newUser.mensajeCorreo

    const handleChange = (event)=>{
        const property = event.target.id
        const value = event.target.value
        setNewUser({...newUser, [property]: value})
        if(success) setSuccess(false)
    }

    
    const handleCheck = (event)=>{
        setNewUser({...newUser, notification: event.target.checked})
    }

    
    const handleSubmit = (event)=>{
        event.preventDefault()
        axios
        .post("https://backpin-production.up.railway.app/api/registrar-cliente",newUser)
        .then(
            response => {
                setSuccess(true)
                setNewUser({nombre: "", apellido: "", correo: "", mensajeCorreo:"", notification: false})
            }
        ).catch(
            error=>{
                setError(error)
            }
        )
    }

    return(
        

<>
            <section className='contenedor-section' id="contacto">
                <form onSubmit={handleSubmit} className='formulario'>
                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="correo"
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                            value={newUser.correo}
                        />
                        <div id="emailHelp" className="form-text">
                            Nunca compartiremos su correo electrónico con nadie.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                            Nombre
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                            value={newUser.nombre}
                        />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="apellido" className="form-label">
                            Apellido
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="apellido"
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                            value={newUser.apellido}
                        />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="mensajeCorreo" className="form-label">
                            Mensaje
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="mensajeCorreo"
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                            value={newUser.mensajeCorreo}
                        />

                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            onChange={handleCheck}
                            checked={newUser.notification}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Enviarme novedades al email.</label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={disableSubmit}>
                        Enviar
                    </button>
                </form>
                {success &&
                    <div className="alert alert-success m-3" role="alert">
                        ¡Tu solicitud fue recibida con exito!
                    </div>}
                {error &&
                    <div className="alert alert-danger m-3" role="alert">
                        ¡Tuvimos un problema al procesar tu solicitud!
                    </div>}

                <div className="img-fluid imagen">
                    
                </div>
            </section>
        </>
);
        

    
}

export default Formulario;