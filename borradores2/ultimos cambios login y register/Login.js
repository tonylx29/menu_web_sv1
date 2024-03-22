import React, { useState } from 'react';
import Navbar from './Navbar';
import 'firebase/auth';
import { useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const Login = () => {
    const auth = useAuth();
    const { user } = auth;
    const displayName = user ? user.displayName : null;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToHome, setRedirectToHome] = useState(false); // Estado para redirigir a la página principal

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await auth.login(email, password);
            setRedirectToHome(true);
        } catch (error) {
            console.error('Error durante el inicio de sesión:', error.message);
            MySwal.fire({
                icon: 'error',
                title: 'Error durante el inicio de sesión',
                text: error.message,
            });
        }
    }

    const handleLoginWithGoogle = async (e) => {
        e.preventDefault();
        try {
            await auth.loginWithGoogle();
            setRedirectToHome(true);
        } catch (error) {
            console.error('Error durante el inicio de sesión con Google:', error.message);
            MySwal.fire({
                icon: 'error',
                title: 'Error durante el inicio de sesión con Google',
                text: error.message,
            });
        }
    }

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await auth.logout();
            setRedirectToHome(false);
        } catch (error) {
            console.error('Error durante el cierre de sesión:', error.message);
            MySwal.fire({
                icon: 'error',
                title: 'Error durante el cierre de sesión',
                text: error.message,
            });
        }
    }

    const handleRegisterLinkClick = () => {
        // Lógica para ir a la página de registro
    }

    return (
        <div className='login-container'>
            <Navbar />
            {displayName && <h5> Gracias por suscribirte {displayName} </h5>}
            <form>
                <h3 className='title'> Login </h3>
                <label htmlFor='email'>Correo Electrónico:</label>
                <input type='email' id='email' onChange={(ev) => setEmail(ev.target.value)} />
                <label htmlFor='password'>Contraseña:</label>
                <input type='password' id='password' onChange={(ev) => setPassword(ev.target.value)} />
                <button onClick={(e) => handleLogin(e)} className='button'> Iniciar Sesión </button>
                <button onClick={(e) => handleLoginWithGoogle(e)} className='button' > Google </button>
                <button onClick={(e) => handleLogout(e)} className='button'> Cerrar Sesión </button>
                <button onClick={handleRegisterLinkClick} className='register-button'>Regístrate aquí</button>
            </form>
            {/* Retorno condicional basado en redirectToHome */}
            {redirectToHome ? <Navigate to="/" /> : null}
        </div>
    );
};


