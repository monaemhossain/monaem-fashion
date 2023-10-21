import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { PropTypes } from "prop-types";

export const AuthProvider = createContext(null)
const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const [data, setData] = useState({})

    const createUser = ( email, password ) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = ( email, password ) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (isUser) => {
            setUser(isUser)
            if (isUser) {
                setLoader(false)
                console.log("user logged in");

            } else {
                console.log("user logged out");
                setLoader(false)
            }
        });
        return unSubscribe;

    }, [])

    const signOutUser = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(response => response.json())
        .then(data => setData(data))
      },[])

    const AuthInfo = {
        createUser,
        signInUser,
        user,
        loader,
        signOutUser,
        data,
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