import React from 'react';
import banner from '../../assets/background-image.jpg'
import AnimatedPage from '../../components/animation/animatedPage';
import ResumeRight from './ResumeRight';
import ResumeLeft from './ResumeLeft';

const Resume = () => {
    return (
        <AnimatedPage>
            <section className='mt-10'>
                <div
                    style={{ backgroundImage: `url(${banner})` }}
                    className='lg:h-[130px] max-[600px]:h-[120px] relative rounded-t-lg flex justify-center items-center'
                >
                    <h1 className='text-[#2eca7f] font-bold text-3xl '>Resume</h1>
                </div>
                <div>
                    <div className='grid lg:grid-cols-2 max-[600px]:grid-cols-1 gap-4 lg:max-w-4xl mx-auto max-[600px]:ms-3'>
                        <div >
                            <ResumeLeft />
                        </div>
                        <div>
                            <ResumeRight />
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Resume;