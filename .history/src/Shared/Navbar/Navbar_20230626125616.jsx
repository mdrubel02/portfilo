import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const menu = <>
    <li className='hover:border-b-2 border-b-primary duration-100'>
        <NavLink
            to="/home"
            aria-label="home"
            title="home"
            className={({isActive})=>isActive?"font-medium font-sans tracking-wide text-[#2eca7f] transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
        >
            Home
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