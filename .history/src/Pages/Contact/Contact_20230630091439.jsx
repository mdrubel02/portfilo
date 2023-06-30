import React  from 'react';
import AnimatedPage from '../../components/animation/animatedPage';
import SectionTitle from '../../components/SectionTitle/SectionTitle';


const Contact = () => {
    return (
        <AnimatedPage>
            <section className='mt-10 shadow-lg'>
                <SectionTitle title="Resume"></SectionTitle>
                <div>
                    <div className='grid lg:grid-cols-2 max-[600px]:grid-cols-1 gap-4 lg:max-w-4xl mx-auto max-[600px]:ms-3'>
                        <div >
                           
                        </div>
                        <div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Contact;