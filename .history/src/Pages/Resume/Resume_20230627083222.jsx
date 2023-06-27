import React from 'react';
import banner from '../../assets/background-image.jpg'

const Resume = () => {
    return (
        <section>
            <div
             style={{ backgroundImage: `url(${banner})` }}
             className='lg:h-[310px] max-[600px]:h-[500px] relative rounded-t-lg'
            >

            </div>
        </section>
    );
};

export default Resume;