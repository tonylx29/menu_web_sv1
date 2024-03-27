import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebaseConfig/firebase";
import { createContext, useContext } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    updatePassword,
    deleteUser,
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        console.error("Error: useAuth must be used within an AuthProvider");
    }
    return context;
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                setIsAuthenticated(true);
                try {
                    const userDoc = await getDoc(doc(db, "users", currentUser.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setIsAdmin(userData.role === "admin");
                    }
                } catch (error) {
                    console.error("Error fetching user role:", error);
                    setErrorMessage("Error al obtener el rol del usuario"); // Mensaje de error personalizado
                }
            } else {
                setIsAuthenticated(false);
                setIsAdmin(false);
            }
        }, (error) => {
            console.error("Error onAuthStateChanged:", error);
            setErrorMessage("Error al iniciar sesión"); // Mensaje de error general
        });
        return unsubscribe;
    }, []);

    const register = async (email, password) => {
        try {
            //Controlar la clave
            if (password.length < 8) {
                throw new Error('La contraseña debe tener al menos 8 caracteres.');
            }
            const response = await createUserWithEmailAndPassword(auth, email, password);
            // Crear el documento de usuario en Firestore con rol por defecto
            await setDoc(doc(db, "users", response.user.uid), { role: "user" });
            setIsAuthenticated(true); // Establecer isAuthenticated como true después de registrar
        } catch (error) {
            setErrorMessage(error.message);
            console.error("Error registering user:", error);
        }
    };

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsAuthenticated(true); // Establecer isAuthenticated como true después de iniciar sesión
        } catch (error) {
            setErrorMessage(error.message);
            console.error("Error logging in:", error);
        }
    };

    const loginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
            setIsAuthenticated(true); // Establecer isAuthenticated como true después de iniciar sesión con Google
            // Aquí deberías crear el documento de usuario en Firestore si no existe
            // Obtener el usuario actualmente autenticado
            const currentUser = auth.currentUser;
            // Verificar si el documento de usuario ya existe en Firestore
            const userDoc = await getDoc(doc(db, "users", currentUser.uid));
            if (!userDoc.exists()) {
                // Si no existe, crear el documento de usuario con el rol por defecto
                await setDoc(doc(db, "users", currentUser.uid), { role: "user" });
            }
        } catch (error) {
            setErrorMessage(error.message);
            console.error("Error logging in with Google:", error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setIsAuthenticated(false);
            setIsAdmin(false);// Establecer isAuthenticated como false después de cerrar sesión
        } catch (error) {
            setErrorMessage(error.message);
            console.error("Error logging out:", error);
        }
    };


    /*

    const updateProfile = async (displayName, photoURL) => {
    try {
      if (user) {
        await updateProfile(user, { displayName, photoURL });
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error updating profile:", error);
    }
  };

  const changePassword = async (newPassword) => {
    try {
      if (user) {
        await updatePassword(user, newPassword);
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error changing password:", error);
    }
  };

  const deleteAccount = async () => {
    try {
      if (user) {
        await deleteUser(user);
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error deleting account:", error);
    }
  };

    */

    return (
        <authContext.Provider value={{ user, isAdmin, isAuthenticated, errorMessage, setErrorMessage, register, login, loginWithGoogle, logout }}>
            {children}
        </authContext.Provider>
    );
}


