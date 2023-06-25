import React from 'react';

const me = () => {
    return (
        <section className=''>
            <div className='flex justify-evenly items-center'>
                <div className='mt-12'>
                    <h2 className='text-2xl font-bold font-poppins text-black'>About <span className='text-[#2eca7f]'>Me</span></h2>
                    <p className='text-[#424242] mb-3'>I'm Ibrahim from Bangladesh. I am a web developer who is proficient in both back-end and front-end frameworks. My passion lies in learning about the latest technologies. with a B.Sc focused in Mechanical Engineering from Sonargaon University(SU)</p>
                    <button className='btn btn-sm'>Download resume</button>
                </div>
            </div>
        </section>
    );
};

export default me;