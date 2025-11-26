import React, { use } from 'react';
import { LiaInfoCircleSolid } from "react-icons/lia";
import { HiOutlineHome } from "react-icons/hi2";
import { PiListChecks } from "react-icons/pi";
import { PiIdentificationBadge } from "react-icons/pi";
import { MdOutlinePets } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi2";


import { Link, NavLink, useNavigate } from 'react-router';
import AuthContext from '../Contexts/AuthContext';

const Navbar = () => {

    const { user, setUser, logout } = use(AuthContext);
    // console.log(user);
    const navigate = useNavigate();

    const links = <div className='*:px-[22px] flex items-center'>
        <NavLink className='flex gap-1' to={'/'}>
            <span className='text-xl flex items-center'>
                <HiOutlineHome />
            </span>
            <span className='text-lg'>Home</span>
        </NavLink>
        <NavLink className='flex gap-1' to={'/services'}>
            <span className='text-xl flex items-center'>
                <PiListChecks />
            </span>
            <span className='text-lg'>Services</span>
        </NavLink>
        {/* <NavLink className='flex gap-1' to={'/about'}>
            <span className='text-xl flex items-center'>
                <HiOutlineShoppingCart />
            </span>
            <span className='text-lg'>Pet Shop</span>
        </NavLink> */}
        <NavLink className='flex gap-1' to={'/profile'}>
            <span className='text-xl flex items-center'>
                <PiIdentificationBadge />
            </span>
            <span className='text-lg'>My Profile</span>
        </NavLink>
    </div >
    const linksForSelection = <div className='*:px-[22px]'>
        <NavLink className='flex gap-1' to={'/'}>
            <span className='flex items-center'>
                <HiOutlineHome />
            </span>
            <span>Home</span>
        </NavLink>
        <NavLink className='flex gap-1' to={'/services'}>
            <span className='text-xl flex items-center'>
                <PiListChecks />
            </span>
            <span>Services</span>
        </NavLink>
        {/* <NavLink className='flex gap-1' to={'/about'}>
            <span className='flex items-center'>
                <HiOutlineShoppingCart />
            </span>
            <span>Pet Shop</span>
        </NavLink> */}
        <NavLink className='flex gap-1' to={'/profile'}>
            <span className='flex items-center'>
                <PiIdentificationBadge />
            </span>
            <span>My Profile</span>
        </NavLink>
    </div>

    const handleLoginButton = () => {
        navigate('/login');
    }
    const handleLogoutButton = () => {
        logout()
            .then(() => {
                setUser('');
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100 shadow-lg shadow-[#ff360010] px-[5%] py-[1%]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {linksForSelection}
                        </ul>
                    </div>
                    <Link className="pl-0 font-black text-[#ff3600] text-shadow-lg text-shadow-[#ff360040] flex items-center gap-1.5" href='/'>
                        <span><MdOutlinePets className='text-2xl sm:text-5xl' /></span>
                        <span className='text-xl sm:text-4xl'>WarmPaws</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5 flex items-center">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-1.5">
                    {
                        user && (
                            <div className="w-10 h-10" onClick={() => navigate('/profile')} title={user.displayName} >
                                {
                                    user.photoURL ? (
                                        <img
                                            className='w-full h-full rounded-full'
                                            src={user.photoURL}
                                            alt="Users Profile Picture."/>
                                    ) : (
                                        <img
                                            className='w-full h-full rounded-full'
                                            alt="Profile Picture Icon"
                                            src={'https://img.icons8.com/ios-filled/100/user-male-circle.png'} />
                                    )
                                }
                            </div>
                        )
                    }
                    {
                        user ? (
                            <a className="btn bg-[#ff3600] rounded-full px-5 text-white text-lg hidden sm:flex" onClick={handleLogoutButton}>Logout</a>
                        ) : (
                            <a className="btn bg-[#ff3600] rounded-full px-8 text-white text-lg" onClick={handleLoginButton}>Login</a>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;