import React, { useState } from 'react'
import Navbar from './Navbar';
import { useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom'; 

export const Register = () => {
    const auth = useAuth()
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false); 
    
    const handleRegister = async (e) => {
        e.preventDefault();
        await auth.register(emailRegister, passwordRegister);
        setRedirectToLogin(true);
    }

    /* 
        const handleLoginWithGoogle = (e) => {
        e.preventDefault();
        auth.loginWithGoogle();
    }

    */

    if (redirectToLogin && auth.isAuthenticated) {
        return <Navigate to="/iniciarsesion" />;
    }

    return (
        <div className='login-container'>
            <Navbar />
            <form className='form' onSubmit={handleRegister}>
                <h3 className='title'> Registro </h3>
                <label htmlFor='email'>Correo Electrónico:</label>
                <input value={emailRegister} onChange={(ev) => setEmailRegister(ev.target.value)} className='input' type='email' id='email' />
                <label htmlFor='password'>Contraseña:</label>
                <input value={passwordRegister} onChange={(ev) => setPasswordRegister(ev.target.value)} className='input' type='password' id='password' />
                <button type='submit' className='button'> Registrarse </button>
            </form>
        </div>
    );
}


