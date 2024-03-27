import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importa el contexto de autenticación

const ProtectedRouter = () => {
  const { isAuthenticated } = useAuth(); // Obtiene el estado de autenticación del contexto

  if (!isAuthenticated) {
    return <Navigate to="/iniciarsesion" replace />;
  }

  return <Outlet />;
};

const AdminRoute = () => {
  const { isAuthenticated, isAdmin } = useAuth(); // Obtiene el estado de autenticación y el rol del contexto

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export { ProtectedRouter, AdminRoute };