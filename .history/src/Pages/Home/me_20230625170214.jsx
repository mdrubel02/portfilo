import React from 'react';

const me = () => {
    return (
        <section className='max-w-4xl mx-auto'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-3/6 mt-14 max-[600px]:ms-5'>
                    <h2 className='text-2xl font-bold font-poppins text-black'>About <span className='text-[#2eca7f]'>Me</span></h2>
                    <p className='text-[#424242] mb-3'>I'm Ibrahim from Bangladesh. I am a web developer who is proficient in both back-end and front-end frameworks. My passion lies in learning about the latest technologies. with a B.Sc focused in Mechanical Engineering from Sonargaon University(SU)</p>
                    <button className='btn btn-sm mb-3'>Download resume</button>
                    <div className="divider"></div> 
                </div>
                <div className='md:w-3/6 lg:mt-16 max-[600px]:ms-5'>
                    <div>
                        <h4 className='text-[#424242] '>Age: <span className='ms-4'>29</span></h4>
                        <h4 className=''>Age: <span>29</span></h4>
                        <h4 className=''>Age: <span>29</span></h4>
                        <h4 className=''>Age: <span>29</span></h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default me;