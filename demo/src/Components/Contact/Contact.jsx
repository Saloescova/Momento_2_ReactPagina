import { useState, useRef } from "react";

export function Contact(){
    const[userName, setUserName] = useState("");
    const[isErrorUserName, setErrorUserName] = useState(false);
    const[userEmail, setUserEmail] = useState("");
    const[isErrorUserEmail, setErrorUserEmail] = useState(false);
    const[userPassword, setUserPassword] = useState("");
    const[isErrorUserPassword, setErrorUserPassword] = useState(false);

    const formRef = useRef(null);

    const onSubmit= (event)=> {
        event.preventDefault();
        setErrorUserName(userName===""?true:false);
        setErrorUserEmail(userEmail===""?true:false);
        setErrorUserPassword(userPassword===""?true:false);
        
        if(userName !="" && userEmail !="" && userPassword !=""){
            console.log(userName + " " + userEmail + " " + userPassword);
            formRef.current.reset();

        }
    };
    return(
        <>
         <section className="container-fluid">
            <div className="row my-5">
                <div>
                    <h3>Registro de Cliente</h3>
                    <hr/>
                    <form ref={formRef} className="p-5 border rounder" onSubmit={onSubmit}>
                        <div class="input-group mb-3">

                            <span class="input-group-text" >

                            <i class="bi bi-person-square"></i>

                            </span>

                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Nombre"
                            value={userName}
                            onChange={userName => setUserName(userName.target.value)}
                            />

                            <div>
                                {isErrorUserName &&( 
                                <label style={{color:"red"}}>Debe ingresar el nombre</label>)}
                            </div>

                        </div>

                        <div class="input-group mb-3">

                            <span class="input-group-text" >

                            <i class="bi bi-cake2"></i>

                            </span>

                            <input 
                            type="number" 
                            class="form-control" 
                            placeholder="Edad"/>
                        </div>

                        <div class="input-group mb-3">

                            <span class="input-group-text" >
                            
                            <i class="bi bi-telephone-fill"></i>
                            
                            </span>
                            
                            <input 
                            type="number" 
                            class="form-control" 
                            placeholder="Telefono"
                            />

                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text" >
                            
                            <i class="bi bi-envelope-at-fill">

                            </i>

                            </span>
                            
                            <input 
                            type="email" 
                            class="form-control" 
                            placeholder="Correo"
                            onChange={userEmail => setUserEmail(userEmail.target.value)}
                            />

                            <div>
                                {isErrorUserEmail &&( 
                                <label style={{color:"red"}}>Debe ingresar el correo</label>)}
                            </div>
                        
                        </div>
                        
                        <div class="input-group mb-3">

                            <span class="input-group-text" >

                            <i class="bi bi-key-fill"></i>

                            </span>

                            <input 
                            type="password" 
                            class="form-control" 
                            placeholder="Contraseña"
                            onChange={userPassword => setUserPassword(userPassword.target.value)}
                            />
                            <div>
                                {isErrorUserPassword &&( 
                                <label style={{color:"red"}}>Debe ingresar el correo</label>)}
                            </div>

                        </div>

                        <div class="input-group mb-3">

                            <span class="input-group-text">

                            <i class="bi bi-calendar3"></i>

                            </span>

                            <input 
                            type="date" 
                            class="form-control" 
                            placeholder="Fecha Registro"/>

                        </div>

                        <div class="input-group mb-3">

                            <span class="input-group-text" >

                            <i class="bi bi-geo-alt-fill"></i>

                            </span>

                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Ciudad"/>

                        </div>

                        <button className="btn btn-outline-primary w-100" type="submit">Registrar</button>

                    </form>

                </div>

            </div>

         </section>
        </>
    )
}
export default Contact;