//import React, { useState, useEffect } from 'react';
import React  from 'react'
import 'firebase/auth';
import { useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';
import AuthForm from './forms/AuthForm';

export const Login = () => {
    const auth = useAuth();
    //const displayName = user ? user.displayName : null;

    const handleSubmit = async (email, password) => {
        try {
            await auth.login(email, password);
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
            title="Login"
            buttonText="Iniciar Sesión"
            onSubmit={handleSubmit}
            onGoogleLogin={handleLoginWithGoogle}
        />

    );
};


