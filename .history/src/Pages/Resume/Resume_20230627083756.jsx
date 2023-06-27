import React from 'react';
import banner from '../../assets/background-image.jpg'
import AnimatedPage from '../../components/animation/animatedPage';

const Resume = () => {
    return (
        <AnimatedPage>
            <section className='mt-10'>
                <div
                    style={{ backgroundImage: `url(${banner})` }}
                    className='lg:h-[130px] max-[600px]:h-[500px] relative rounded-t-lg'
                >
                    <h1>Resume</h1>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Resume;