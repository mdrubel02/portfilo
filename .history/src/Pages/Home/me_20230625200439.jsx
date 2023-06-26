import React from 'react';
import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'


const me = () => {
    return (
        <section className='max-w-4xl mx-auto'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-3/6 mt-14 max-[600px]:ms-5'>
                    <h2 className='text-2xl font-bold font-poppins text-black'>About <span className='text-[#2eca7f]'>Me</span></h2>
                    <p className='text-[#424242] mb-3'>I'm Ibrahim from Bangladesh. I am a web developer who is proficient in both back-end and front-end frameworks. My passion lies in learning about the latest technologies. with a B.Sc focused in Mechanical Engineering from Sonargaon University(SU)</p>
                    <AwesomeButtonSocial
                        className='bg-[#2eca7f]'
                        cssModule={AwesomeButtonStyles}
                        type="linkedin"
                        sharer={ 'hello'}
                    >
                        Button
                    </AwesomeButtonSocial>

                </div>
                <div className="divider border-gray-300 border-[1px] lg:hidden"></div>
                <div className='md:w-3/6 lg:mt-16 max-[600px]:ms-5'>
                    <div>
                        <h4 className='text-[#424242] mb-2'>Age: <span className='ms-4'>21</span></h4>
                        <h4 className='text-[#424242] mb-2'>Address: <span className='ms-4'>Dhaka,Bangladesh</span></h4>
                        <h4 className='text-[#424242] mb-2'>Email: <span className='ms-4 text-[#2eca7f]'>mdibrahim529907@gmail.com</span></h4>
                        <h4 className='text-[#424242] mb-2'>Phone: <span className='ms-4'>+8801923099108</span></h4>
                        <h4 className='text-[#424242] mb-2 '>Occupation: <span className='ms-4'>Student</span></h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default me;