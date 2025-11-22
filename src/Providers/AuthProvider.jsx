import React, { useState } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { Auth } from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password);
    }

    const logout = () => {
        return signOut(Auth);
    }

    const updateUserProfile = (name, photoURL) =>{
        const info = {displayName: name, photoURL: photoURL};
        updateProfile(Auth.currentUser, info);
    }

    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        return signInWithPopup(Auth, googleProvider)
    }

    const Context = {
        Auth,
        user,
        setUser,
        signUp,
        userLogin,
        loginWithGoogle,
        updateUserProfile,
        logout
    }

    return (
        <div>
            <AuthContext.Provider value={Context}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;