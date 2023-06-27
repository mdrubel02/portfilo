import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div className=''>

            <Navbar />

            <div className='max-w-screen-lg mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;