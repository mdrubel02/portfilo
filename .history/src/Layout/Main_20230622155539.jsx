import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='mx-auto px-4'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;