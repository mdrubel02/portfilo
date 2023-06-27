import React from 'react';
import banner from '../../assets/background-image.jpg'
const SectionTitle = ({ title }) => {
    return (
        <div
            style={{ backgroundImage: `url(${banner})` }}
            className='lg:h-[130px] max-[600px]:h-[120px] relative rounded-t-lg flex justify-center items-center'
        >
            <h1 className='text-[#2eca7f] font-bold text-3xl '>{title}</h1>
        </div>
    );
};

export default SectionTitle;