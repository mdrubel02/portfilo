import React from 'react';
import banner from '../../assets/background-image.jpg'
import AnimatedPage from '../../components/animation/animatedPage';
import ResumeRight from './ResumeRight';
import ResumeLeft from './ResumeLeft';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Resume = () => {
    return (
        <AnimatedPage>
            <section className='mt-10 shadow-lg'>
              <SectionTitle title="Resume"></SectionTitle>
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