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
    onAuthStateChanged
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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                setIsAuthenticated(true);
                try {
                    const userDoc = await getDoc(doc(db, "users", currentUser.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        if (userData.role === "admin") {
                            setIsAdmin(true);
                        } else {
                            setIsAdmin(false);
                        }
                    }
                } catch (error) {
                    console.error("Error fetching user role:", error);
                }
            } else {
                setIsAuthenticated(false);
                setIsAdmin(false);
            }
        });
        return unsubscribe;
    }, []);

    const register = async (email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            // Crear el documento de usuario en Firestore con rol por defecto
            await setDoc(doc(db, "users", response.user.uid), { role: "user" });
            setIsAuthenticated(true); // Establecer isAuthenticated como true después de registrar
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    const login = async (email, password) => {
        try {
            //const response = await signInWithEmailAndPassword(auth, email, password);
            //console.log(response);
            await signInWithEmailAndPassword(auth, email, password);
            setIsAuthenticated(true); // Establecer isAuthenticated como true después de iniciar sesión
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    const loginWithGoogle = async () => {
        try {
            //const response = await signInWithPopup(auth, new GoogleAuthProvider());
            //console.log(response);
            await signInWithPopup(auth, new GoogleAuthProvider());
            setIsAuthenticated(true); // Establecer isAuthenticated como true después de iniciar sesión con Google
        } catch (error) {
            console.error("Error logging in with Google:", error);
        }
    };

    const logout = async () => {
        try {
            //const response = await signOut(auth);
            //console.log(response);
            await signOut(auth);
            setIsAuthenticated(false); // Establecer isAuthenticated como false después de cerrar sesión
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <authContext.Provider value={{ user, isAdmin, isAuthenticated, register, login, loginWithGoogle, logout }}>
            {children}
        </authContext.Provider>
    );
}


