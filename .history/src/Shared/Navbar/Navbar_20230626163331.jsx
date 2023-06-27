import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AnimatedPage from '../../components/animation/animatedPage';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menu = <>
        <li className='hover:border-b-2 border-b-[#2eca7f] text-primary duration-100'>
            <NavLink
                to="/home"
                aria-label="home"
                title="home"
                className={({ isActive }) => isActive ? "font-bold font-sans  text-primary transition-colors duration-200 " : "font-bold text-[#49515d] transition-colors duration-200 "}
            >
                Home
            </NavLink>

        </li>
        <li className='hover:border-b-2 border-b-[#2eca7f] text-[#2eca7f] duration-100'>
            <NavLink
                to="/about"
                aria-label="About"
                title="About"
                className={({ isActive }) => isActive ? "font-bold font-sans  text-[#2eca7f] transition-colors duration-200 " : "font-bold text-[#49515d] transition-colors duration-200 "}
            >
                About
            </NavLink>

        </li>
        <li className='hover:border-b-2 border-b-[#2eca7f] text-[#2eca7f] duration-100'>
            <NavLink
                to="/projects"
                aria-label="projects"
                title="projects"
                className={({ isActive }) => isActive ? "font-bold font-sans  text-[#2eca7f] transition-colors duration-200 " : "font-bold text-[#49515d] transition-colors duration-200 "}
            >
                Projects
            </NavLink>

        </li>
    </>
    return (
        <div className="py-5 mx-auto  max-[600px]:px-4 font-jost sticky top-0 bg-white z-50 shadow-sm">
            <div className="relative flex items-center justify-between z-30">
                <Link
                    to="/"
                    className="inline-flex items-center"
                >
                    {/* <img src={logo} alt="" className='w-8/12'/> */}
                    <span className='text-secondary font-bold text-3xl'>furniture</span>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex text-[16px] uppercase">
                    {menu}
                </ul>

                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <AnimatedPage>
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm z-30">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                className="inline-flex items-center"
                                            >
                                                {/* <img src={logo} alt="" className='w-8/12'/> */}
                                                <span className='text-secondary font-bold text-3xl'>furniture</span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            {menu}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </AnimatedPage>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;