import React from 'react';
import profile from '../../assets/nayeem.jpg'
import banner from '../../assets/background-image.jpg'
import { FaLinkedinIn } from 'react-icons/fa';


const Home = () => {
    const user = ['#9e9e9e']
    return (
        <div className='mt-3'>
            <div
             style={{backgroundImage: `url(${banner})`}}
            className='lg:h-[310px] max-[600px]:h-[450px relative rounded-t-lg'>
                    <div className='lg:flex mt-4'>
                        <div className='lg:w-5/12 flex justify-center items-center '>
                            <img className=' lg:h-3/4 max-[600px]:h-60 lg:absolute lg:bottom-[-20px] lg:left-[75px] mt-9 ' src={profile} alt="profile" />
                        </div>
                        <div className='lg:w-1/2 flex justify-start items-center '>
                            <div className='mt-20 w-auto'>
                                <h3 className='text-5xl text-white font-extrabold font-sans tracking-normal'>Md Ibrahim</h3>
                                <p className='text-center mt-3 text-xl text-white font-bold font-poppins'>full stack developer</p>
                                <div>
                                    <span className='p-3' ><FaLinkedinIn className='text-[#9e9e9e]' /></span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Home;