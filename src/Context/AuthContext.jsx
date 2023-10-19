import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { PropTypes } from "prop-types";

export const AuthProvider = createContext(null)
const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = ( email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = ( email, password ) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (isUser) => {
            setUser(isUser)
            if (isUser) {
                setLoader(false )
                console.log("user logged in");

            } else {
                console.log("user logged out");
                setLoader(false)
            }
        });
        return unSubscribe;

    }, [])

    const signOutUser = () => {
        return signOut(auth)
    }

    const AuthInfo = {
        createUser,
        signInUser,
        user,
        loader,
        signOutUser,
    }
    return (
        <AuthProvider.Provider value={AuthInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
AuthContext.propTypes = {
    children: PropTypes.node
}