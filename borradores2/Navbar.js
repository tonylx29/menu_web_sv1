import React, {useState} from 'react';
import logoUNL from '../images/logoUNL.png';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const Navbar = () => {
    //const { isAdmin } = useAuth();
    const { user, isAdmin, logout } = useAuth();
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> <img src={logoUNL} style={{ width: "200px", marginTop: "10px" }} alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bloques">Bloques</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/mapa"> Mapa</Link>
                        </li>
                        {isAdmin && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/show">Editar</Link>
                            </li>
                        )}

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">{user.displayName || user.email}</span>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={logout}>Cerrar Sesión</button>
                                </li>
                            </>
                        ) : (
                            <>
                                {isRegistering ? (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">Registrarse</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/iniciarsesion">Iniciar Sesión</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/iniciarsesion">Iniciar Sesión</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">Registrarse</Link>
                                        </li>
                                    </>
                                )}
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

