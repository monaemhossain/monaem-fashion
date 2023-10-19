import { createContext } from "react";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthProvider = createContext(null)
const AuthContext = ({children}) => {


    const createUser = ( email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = ( email, password ) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = {createUser, signInUser}
    return (
        <AuthProvider.Provider value={AuthInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;