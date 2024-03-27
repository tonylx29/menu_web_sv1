//import React, { useState, useEffect } from 'react'
import React  from 'react'
//import Navbar from './Navbar';
import { useAuth } from './context/AuthContext';
import { AuthForm } from './forms/AuthForm';
import { Navigate } from 'react-router-dom';

export const Register = () => {
    const auth = useAuth();

    const handleSubmit = async (email, password) => {
        try {
            await auth.register(email, password);
            return <Navigate to="/" />;
        } catch (error) {
            auth.setErrorMessage(error.message);
        }
    };

    const handleLoginWithGoogle = async () => {
        try {
            await auth.loginWithGoogle();
            return <Navigate to="/" />;
        } catch (error) {
            auth.setErrorMessage(error.message);
        }
    };

    return (
        <AuthForm
            title="Registro"
            buttonText="Registrarse"
            onSubmit={handleSubmit}
            onGoogleLogin={handleLoginWithGoogle}
        />
    );
}
