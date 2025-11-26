import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import AuthContext from '../Contexts/AuthContext';

const ForgetPass = ({params}) => {

    const {email} = useParams(params);
    const {updatePassword} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleResetPass = e => {
        e.preventDefault();
        const currentEmail = e.target.email.value;
        updatePassword(currentEmail)
            .then(() => {
                window.open("https://mail.google.com", "_blank");
                navigate('/login');
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='min-h-[75vh] flex items-center'>
            <form onSubmit={handleResetPass} className='w-full'>
                <fieldset className="fieldset space-y-3 bg-[#ff3600] shadow-2xl shadow-[#ff3600] opacity-90 rounded-3xl lg:w-[600px] mx-auto px-12 py-8">
                    <h3 className='font-black text-white text-5xl text-center'>Forget Password</h3>

                    {/* <label className="label text-white text-lg">Email</label> */}
                    <input 
                    type="email" 
                    name='email' 
                    className="input w-full rounded-full p-7 text-xl text-[#000000]" 
                    placeholder="Email" 
                    defaultValue={email}/>

                    <button
                        type='submit'
                        className="btn bg-white hover:opacity-75 shadow-none text-[#ff3600] hover:text-gray-600 p-7 rounded-full text-xl"
                    >Send Reset Password Email</button>

                    <div>
                        <p className='text-white text-sm'>
                            <span>Do not have an account ? Please </span>
                            <Link className='link text-shadow-lg text-shadow-[#00000020]' to={'/register'}>Register</Link>
                        </p>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default ForgetPass;