import React, { useState, useEffect } from 'react';
import "../../styles/DialogErrores.css";
import { useAuth } from '../context/AuthContext'; 

export const AuthForm = ({ title, buttonText, onSubmit, onGoogleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(''); //controlar los errores de la clave
    const { errorMessage, setErrorMessage } = useAuth();
    
    useEffect(() => {
        setErrorMessage(errorMessage);
    }, [errorMessage, setErrorMessage]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length < 8) {
            setPasswordError('La contraseña debe tener al menos 8 caracteres.');
            return;
        }   
        try {
            await onSubmit(email, password);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className='login-container'>
            {errorMessage && (
                <div className="dialog-overlay">
                    <div className="dialog-content">
                        <p className="error-message">{errorMessage}</p>
                        <button onClick={() => setErrorMessage(null)} className="close-button">Cerrar</button>
                        {/* <button onClick={handleClose} className="close-button">Cerrar</button>*/}
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <h3 className='title'>{title}</h3>
                <label htmlFor='email'>Correo Electrónico:</label>
                <input type='email' id='email' value={email} onChange={(ev) => setEmail(ev.target.value)} />
                <label htmlFor='password'>Contraseña:</label>
                <input type='password' id='password' value={password} onChange={(ev) => setPassword(ev.target.value)} />
                {passwordError && <p className="error-message">{passwordError}</p>}
                <button type='submit' className='button'>{buttonText}</button>
                <button onClick={onGoogleLogin} className='button' >Iniciar sesión con Google</button>
            </form>
        </div>
    );
};

export default AuthForm;
