import React from 'react';
import banner from '../../assets/background-image.jpg'

const Resume = () => {
    return (
        <section className='mt-10'>
            <div
             style={{ backgroundImage: `url(${banner})` }}
             className='lg:h-[150px] max-[600px]:h-[500px] relative rounded-t-lg'
            >
                <h1>Resume</h1>
            </div>
        </section>
    );
};

export default Resume;