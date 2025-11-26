import React, { useContext, useState } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { LuEye, LuEyeClosed } from "react-icons/lu";

const Register = () => {
    const { user, setUser, signUp, loginWithGoogle, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

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
                Swal.fire({
                    icon: "success",
                    title: "You are Logged In",
                    text: "To see and edit your profile information, go My Profile"
                });
                navigate('/');
            }).catch(error => {
                if (error.message === 'Firebase: Error (auth/invalid-credential).') {
                    Swal.fire({
                        icon: "error",
                        title: 'Invalid Password or UserName.',
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
            })
    }
    const handleGoogleSignUp = () => {
        loginWithGoogle()
            .then(credential => {
                const user = credential.user;
                setUser(user);
                Swal.fire({
                    title: "Signed Up",
                    text: "To see and edit your profile information, go 'My Profile'",
                    icon: "success"
                });
                navigate('/');
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

                    <div className='relative z-0'>
                        {/* <label className="label text-white text-lg">Password</label> */}
                        <input type={ show ? 'text' : 'password'} name='password' className="input w-full rounded-full p-7 text-xl" placeholder="Password" required />
                        <button
                            type='button'
                            onClick={()=> setShow(!show)}
                            className='absolute right-5.5 top-4.5 z-10 cursor-pointer'
                            title={show ? 'Click to hide password' : 'Click to show password'}
                        >
                            { show ? <LuEyeClosed className='text-2xl text-[#000000] opacity-60' /> : <LuEye className='text-2xl text-[#000000] opacity-60' />}
                        </button>
                    </div>

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