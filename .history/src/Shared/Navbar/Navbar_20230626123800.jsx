import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const menu = <>
    <li className='flex items-center'>
        <NavLink
            to="/home"
            aria-label="home"
            title="home"
            className={({ isActive }) => isActive ? "after:content-[' '] after:ml-0.5 absolute bottom-[-4px] left-[30px] w-[30px] h-[2px]" : "font-bold transition-colors duration-100 text-primary"}
        >
            Home
        </NavLink>

    </li>
    <li className='flex items-center'>
        <NavLink
            to="/instructors"
            aria-label="instructors"
            title="instructors"
            className={({ isActive }) => isActive ? "font-medium bg-primary-focus transition-colors duration-100" : "font-bold transition-colors duration-100 text-primary"}
        >
            Instructors
        </NavLink>
    </li>
    <li className='flex items-center'>
        <NavLink
            to="/classes"
            aria-label="classes"
            title="classes"
            className={({ isActive }) => isActive ? "font-medium bg-primary-focus transition-colors duration-100" : "no-underline text-white text-lg font-semibold transition duration-300 ease-in-out"}
        >
            Classes
        </NavLink>
    </li>
</>
    return (
        <div className="navbar static">
            <div className="navbar-start">
            <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Md Ibrahim</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            
            
        </div>
    );
};

export default Navbar;