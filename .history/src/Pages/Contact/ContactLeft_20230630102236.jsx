import React from 'react';
import googleImage from '../../assets/google_map.jpg'
import { HiLocationMarker } from 'react-icons/hi'

const ContactLeft = () => {
    return (
        <div>
            <div>
                <h1 className='text-center mt-12 mb-8 ms-10 text-xl text-[#424242] font-bold font-poppins'>Coding <span className='text-primary '>Skills</span></h1>
                <img src={googleImage} alt="googleImage" />
                <div className='mt-8'>
                    <p className='text-2xl flex  items-center text-primary'><HiLocationMarker /> <span className='ms-8 text-secondary text-base'>Dhaka,Bangladesh</span></p>
                    <p className='text-2xl flex  items-center text-primary'><HiLocationMarker /> <span className='ms-8 text-secondary text-base'>Dhaka,Bangladesh</span></p>
                    <p className='text-2xl flex  items-center text-primary'><HiLocationMarker /> <span className='ms-8 text-secondary text-base'>Dhaka,Bangladesh</span></p>
                    <p className='text-2xl flex  items-center text-primary'><HiLocationMarker /> <span className='ms-8 text-secondary text-base'>Dhaka,Bangladesh</span></p>
                    <p className='text-2xl flex  items-center text-primary'><HiLocationMarker /> <span className='ms-8 text-secondary text-base'>Dhaka,Bangladesh</span></p>
                </div>
            </div>
        </div>
    );
};

export default ContactLeft;