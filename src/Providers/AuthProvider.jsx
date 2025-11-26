import React, { useEffect, useState } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { auth } from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')
    const [authLoading, setAuthLoading] = useState(true);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    const updateUserProfile = (name, photoURL) =>{
        const info = {displayName: name, photoURL: photoURL};
        updateProfile(auth.currentUser, info);
    }

    const updatePassword = email => {
        return sendPasswordResetEmail(auth, email);
    }

    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setAuthLoading(false);
        })
        return () => unsubscribe();
    },[])

    const Context = {
        Auth: auth,
        user,
        authLoading,
        setUser,
        signUp,
        userLogin,
        updatePassword,
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