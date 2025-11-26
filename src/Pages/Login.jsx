import React, { use, useState } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeClosed, LuOctagonX } from "react-icons/lu";

const Login = () => {

    const { user, setUser, userLogin, loginWithGoogle } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [show, setShow] = useState(false);

    const handleLoginSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then(credential => {
                setUser(credential.user);
                Swal.fire({
                    icon: "success",
                    title: "You are Logged In",
                    text: "To see and edit your profile information, go My Profile"
                });
                navigate(location.state ? location.state : '/');
            }).catch(error => {
                if (error.message === 'Firebase: Error (auth/invalid-credential).') {
                    Swal.fire({
                        icon: "error",
                        title: 'Invalid Password or UserName.',
                        text: "Something went wrong, please check and try again!",
                        footer: `<a href="/register">Do not have an account ? Please register.</a>`
                    });
                    console.log(error);
                } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    Swal.fire({
                        icon: "error",
                        title: 'Invalid Email.',
                        text: "Something went wrong, please check and try again!",
                        footer: `<a href="/register">Do not have an account ? Please register.</a>`
                    });
                    console.log(error);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: error.message,
                        text: "Something went wrong, please check and try again!",
                        footer: `<a href="/register">Do not have an account ? Please register.</a>`
                    });
                    console.log(error);
                }
            });
    };
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(credential => {
                const user = credential.user;
                setUser(user);
                Swal.fire({
                    title: "You are Logged In!",
                    text: "To see and edit your profile information, go 'My Profile'",
                    icon: "success"
                });
                navigate(location.state ? location.state : '/');
            }).catch(error => {
                Swal.fire({
                    icon: "error",
                    title: error.message,
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
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

                    <div className='relative z-0'>
                        {/* <label className="label text-white text-lg">Password</label> */}
                        <input type={show ? 'text' : 'password'} name='password' className="input w-full rounded-full p-7 text-xl" placeholder="Password" required />
                        <button
                            type='button'
                            onClick={() => setShow(!show)}
                            className='absolute right-5.5 top-4.5 z-10 cursor-pointer'
                            title={show ? 'Click to hide password' : 'Click to show password'}
                        >
                            {show ? <LuEyeClosed className='text-2xl text-[#000000] opacity-60' /> : <LuEye className='text-2xl text-[#000000] opacity-60' />}
                        </button>
                    </div>

                    <button
                        type='submit'
                        disabled={user && true}
                        title={user && 'You are already logged in.'}
                        className="btn bg-white hover:opacity-75 shadow-none text-[#ff3600] hover:text-gray-600 p-7 rounded-full text-2xl"
                    >Login</button>

                    <div>
                        <p className='text-white text-sm'>
                            <span>Forget Password ? click on </span>
                            <Link className='link text-shadow-lg text-shadow-[#00000020]' to={'/register'}>Reset Password</Link>
                        </p>
                        <p className='text-white text-sm'>
                            <span>Do not have an account ? Please </span>
                            <Link className='link text-shadow-lg text-shadow-[#00000020]' to={'/register'}>Register</Link>
                        </p>
                    </div>

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