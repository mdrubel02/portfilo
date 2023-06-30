import React from 'react';
import googleImage from '../../assets/google_map.jpg'
import { HiLocationMarker} from 'react-icons/hi'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdOutlineNetworkWifi} from 'react-icons/md'

const ContactLeft = () => {
    return (
        <div>
            <div>
                <h1 className='text-center mt-12 mb-8 ms-10 text-xl text-[#424242] font-bold font-poppins'>Get in<span className='text-primary ms-2'>Touch</span></h1>
                <img src={googleImage} alt="googleImage" />
                <div className='mt-8'>
                    <p className='text-2xl flex  items-center text-primary'><HiLocationMarker /> <span className='ms-8 text-secondary text-base'>Dhaka,Bangladesh</span></p>
                    <p className='text-2xl flex  items-center text-primary mt-8'><AiOutlineMail /> <span className='ms-8 text-secondary text-base'>mdibrahim529907@gmail.com</span></p>
                    <p className='text-2xl flex  items-center text-primary mt-8'><BsTelephoneFill /> <span className='ms-8 text-secondary text-base'>+8801923099108</span></p>
                    <p className='text-2xl flex  items-center text-primary mt-8'><MdOutlineNetworkWifi /> <span className='ms-8 text-secondary text-base'>Student</span></p>
                </div>
            </div>
        </div>
    );
};

export default ContactLeft;