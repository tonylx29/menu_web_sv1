import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/ErrorPage.css'// Estilos personalizados

const ErrorPage = ({ message }) => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-title">Oops! Algo salió mal</h1>
                <p className="error-message">{message}</p>
                <Link to="/" className="error-link">Volver a la página de inicio</Link>
            </div>
        </div>
    );
}


export default ErrorPage;
