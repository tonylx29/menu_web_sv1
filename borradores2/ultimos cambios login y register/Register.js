import React, { useState } from 'react'
import Navbar from './Navbar';
import { useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom'; 

export const Register = () => {
    const auth = useAuth()
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false); 
    
    const handleRegister = (e) => {
        e.preventDefault();
        auth.register(emailRegister, passwordRegister);
        setRedirectToLogin(true);
    }

    const handleLoginWithGoogle = (e) => {
        e.preventDefault();
        auth.loginWithGoogle();
    }

    if (redirectToLogin) {
        return <Navigate to="/iniciarsesion" />; // Redirigir a la página de inicio de sesión solo si el usuario está autenticado
    }

    return (
        <div className='login-container'>
            <Navbar></Navbar>
            <form className='form'>
                <h3 className='title'> Registro </h3>
                <label htmlFor='email'>Correo Electrónico:</label>
                <input onChange={(ev) => setEmailRegister(ev.target.value)} className='input' type='email' id='email' />
                <label htmlFor='password'>Contraseña:</label>
                <input onChange={(ev) => setPasswordRegister(ev.target.value)} className='input' type='password' id='password' />
                <button onClick={(e) => handleRegister(e)} className='button'> Registrarse </button>
                <button onClick={(e) => handleLoginWithGoogle(e)}  className='button' > Registro con Google </button>
            </form>
        </div>
    );
}


