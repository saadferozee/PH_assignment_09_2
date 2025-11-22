import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import AuthProvider from '../Providers/AuthProvider';

const Root = () => {
    return (
        <AuthProvider>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </AuthProvider>
    );
};

export default Root;