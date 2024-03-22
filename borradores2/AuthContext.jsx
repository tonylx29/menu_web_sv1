import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import React, {useState, useEffect} from "react";
import { auth, db} from "../../firebaseConfig/firebase";
import { createContext, useContext} from "react";
import { doc, setDoc, getDoc} from "firebase/firestore";

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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // Obtener el rol del usuario desde Firestore
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
                setIsAdmin(false);
            }
        });
        return unsubscribe;
    }, []);

    const register = async (email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);

            // Crear el documento de usuario en Firestore con rol por defecto
            await setDoc(doc(db, "users", response.user.uid), { role: "user" });
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, new GoogleAuthProvider());
            console.log(response);
        } catch (error) {
            console.error("Error logging in with Google:", error);
        }
    };

    const logout = async () => {
        try {
            const response = await signOut(auth);
            console.log(response);
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <authContext.Provider value={{ user, isAdmin, register, login, loginWithGoogle, logout }}>
            {children}
        </authContext.Provider>
    );
}


