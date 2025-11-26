import React, { useContext, useState } from 'react';
import AuthContext from '../Contexts/AuthContext';

const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='min-h-[75vh]'>
            {
                user ? (
                    <div className='border my-[10vh] w-[45%] mx-auto h-[45%] bg-[#ff360060] p-12'>
                        <div className='border p-3 w-fit mx-auto rounded-full bg-white flex items-center'>
                            <img className='w-[200px] h-[200px] mx-auto rounded-full' src={`${user.photoURL}`} alt="Profile Picture" />
                        </div>
                        <div>
                            <h1>{user.displayName}</h1>
                            <h3>{user.email}</h3>
                        </div>
                    </div>
                ) : (
                    <div className='w-full h-[75vh] flex items-center justify-center'>
                        <h1>You are not logged in.</h1>
                    </div>
                )
            }
        </div>
    );
};

export default Profile;