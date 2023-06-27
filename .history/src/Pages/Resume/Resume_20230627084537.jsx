import React from 'react';
import banner from '../../assets/background-image.jpg'
import AnimatedPage from '../../components/animation/animatedPage';

const Resume = () => {
    return (
        <AnimatedPage>
            <section className='mt-10'>
                <div
                    style={{ backgroundImage: `url(${banner})` }}
                    className='lg:h-[130px] max-[600px]:h-[500px] relative rounded-t-lg flex justify-center items-center'
                >
                    <h1 className='text-[#2eca7f] font-bold text-3xl '>Resume</h1>
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>part 1</div>
                        <div>part 2</div>
                        <div>part 2</div>
                        <div>part 2</div>
                        <div>part 2</div>
                        <div>part 2</div>
                        <div>part 2</div>
                        <div>part 2</div>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Resume;