import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Particle from '../components/Particle/Particle';

const Main = () => {
    return (
        <div className=''>
            <Particle></Particle>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;