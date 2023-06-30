import React from 'react';
import googleImage from '../../assets/google_map.jpg'
import { HiLocationMarker } from 'react-icons/hi'

const ContactLeft = () => {
    return (
        <div>
            <div>
                <h1 className='text-center mt-12 mb-8 ms-10 text-xl text-[#424242] font-bold font-poppins'>Coding <span className='text-primary '>Skills</span></h1>
                <img src={googleImage} alt="googleImage" />
                <div>
                    <h4 className='text-1xl'><HiLocationMarker /> <span>Dhaka,Bangladesh</span></h4>
                </div>
            </div>
        </div>
    );
};

export default ContactLeft;