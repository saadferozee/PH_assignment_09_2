import React, { use } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { Link, useNavigate } from 'react-router';

import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const { user, setUser, userLogin, loginWithGoogle } = use(AuthContext);
    const navigate = useNavigate();

    const handleLoginSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then(credential => {
                setUser(credential.user);
                navigate('/');
            }).catch(error => {
                console.log(error);
            });
    };
    const handleGoogleLogin = () => {
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
        <div className='h-[70vh] flex items-center justify-center'>
            <title>WormPows | Login</title>
            <form onSubmit={handleLoginSubmit} className='w-full'>
                <fieldset className="fieldset space-y-3 bg-[#ff3600] shadow-2xl shadow-[#ff3600] opacity-90 rounded-3xl lg:w-[600px] mx-auto px-12 py-8">
                    <h3 className='font-black text-white text-5xl text-center'>Login</h3>

                    {/* <label className="label text-white text-lg">Email</label> */}
                    <input type="email" name='email' className="input w-full rounded-full p-7 text-xl" placeholder="Email" />

                    {/* <label className="label text-white text-lg">Password</label> */}
                    <input type="password" name='password' className="input w-full rounded-full p-7 text-xl" placeholder="Password" />

                    <button
                        type='submit'
                        disabled={user && true}
                        title={user && 'You are already logged in.'}
                        className="btn bg-white hover:opacity-75 shadow-none text-[#ff3600] hover:text-gray-600 p-7 rounded-full text-2xl"
                    >Login</button>

                    <p className='text-white text-lg'>
                        <span>Do not have an account ? Please </span>
                        <Link className='link text-shadow-lg text-shadow-[#00000020]' to={'/register'}>Register</Link>
                    </p>

                    <button
                        type='button'
                        disabled={user && true}
                        title={user && 'You are already logged in.'}
                        onClick={handleGoogleLogin}
                        className="btn bg-white hover:opacity-75 shadow-none text-[#ff3600] hover:text-gray-600 p-7 rounded-full text-2xl"
                    >
                        <span><FcGoogle /></span>
                        <span className='text-xl'>Login with Google</span>
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;