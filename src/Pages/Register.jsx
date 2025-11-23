import React, { useContext, useState } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { Link, useNavigate } from 'react-router';

import { FcGoogle } from "react-icons/fc";
import { Bounce, ToastContainer, toast } from 'react-toastify';


const Register = () => {
    const { user, setUser, signUp, loginWithGoogle, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegisterSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regex6Character = /^.{6,}$/;
        const regexUppercase = /^(?=.*[A-Z]).*$/;
        const regexLowercase = /^(?=.*[a-z]).*$/;

        if (!regex6Character.test(password)) {
            toast.error('Password must be at least 6 character.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        } else if (!regexLowercase.test(password)) {
            toast.error('Password must have a lowercase letter.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        } else if (!regexUppercase.test(password)) {
            toast.error('Password must have a uppercase letter.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }
        signUp(email, password)
            .then(credential => {
                setUser(credential.user);
                updateUserProfile(name, photoURL);
                navigate('/');
            }).catch(error => {
                console.log(error);
            })
    }
    const handleGoogleSignUp = () => {
        loginWithGoogle()
            .then(credential => {
                const user = credential.user;
                setUser(user);
                navigate('/');
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='h-[80vh] flex items-center justify-center'>
            <title>WormPows | Register</title>
            <form onSubmit={handleRegisterSubmit} className='w-full'>
                <fieldset className="fieldset space-y-2 bg-[#ff3600] shadow-2xl shadow-[#ff3600] opacity-90 rounded-3xl lg:w-[600px] mx-auto px-12 py-8">
                    <h3 className='font-black text-white text-5xl text-center'>Register</h3>

                    {/* <label className="label text-white text-lg">Name</label> */}
                    <input type="text" name='name' className="input w-full rounded-full p-7 text-xl" placeholder="Name" required />

                    {/* <label className="label text-white text-lg">Photo URL</label> */}
                    <input type="text" defaultValue={null} name='photoURL' className="input w-full rounded-full p-7 text-xl" placeholder="Photo URL" />

                    {/* <label className="label text-white text-lg">Email</label> */}
                    <input type="email" name='email' className="input w-full rounded-full p-7 text-xl" placeholder="Email" required />

                    {/* <label className="label text-white text-lg">Password</label> */}
                    <input type="password" name='password' className="input w-full rounded-full p-7 text-xl" placeholder="Password" required />

                    <button
                        type='submit'
                        disabled={user && true}
                        title={user && 'You are already logged in.'}
                        className="btn bg-white hover:opacity-75 shadow-none text-[#ff3600] hover:text-gray-600 p-7 rounded-full text-2xl"
                    >Register</button>

                    <p className='text-white text-lg'>
                        <span>Already have an account ? Please </span>
                        <Link className='link text-shadow-lg text-shadow-[#00000020]' to={'/login'}>Login</Link>
                    </p>

                    <button
                        type='button' 
                        disabled={user && true}
                        title={user && 'You are already logged in.'}
                        onClick={handleGoogleSignUp}
                        className="btn bg-white hover:opacity-75 shadow-none text-[#ff3600] hover:text-gray-600 p-7 rounded-full text-2xl"
                    >
                        <span><FcGoogle /></span>
                        <span className='text-xl'>SignUp with Google</span>
                    </button>
                </fieldset>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default Register;