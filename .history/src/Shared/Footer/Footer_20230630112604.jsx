import React from 'react';
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='text-white' >
            <footer className="footer md:p-10 md:flex md:items-center md:justify-between w-[95%] mx-auto">
                <div>
                    <img width="50" height="50" src="assets/logo8.png" alt="" />

                    <p className='text-secondary'>Designed and Developed by Md.Ibrahim in 2022-2023</p>
                </div>
                <div className='flex'>
                    <div className="grid grid-flow-col gap-4">
                        <span className="footer-title text-secondary">ধন্যবাদ</span>
                        <span className="footer-title text-secondary">THANKS</span>
                        <span className="footer-title text-secondary">شکریہ</span>
                        <span className="footer-title text-secondary">धन्यवाद</span>
                    </div>
                </div>
                <button onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }} className='mt-8 text-primary'><FaArrowUp className='animate-bounce w-8 h-10'></FaArrowUp></button>
            </footer>
        </div>
    );
};

export default Footer;