import React from 'react';
import profile from '../../assets/nayeem.jpg'
import banner from '../../assets/background-image.jpg'
import AnimatedTextCharacter from '../../assets/animation/AnimatedTextCharacter/AnimatedTextCharacter';

const Home = () => {
    return (
        <div className='mt-3'>
            <div
             style={{backgroundImage: `url(${banner})`}}
            className='lg:h-[310px] max-[600px]:h-[450px] bg-red-600  relative rounded-t-lg'>
                    <div className='lg:flex mt-4'>
                        <div className='lg:w-1/2 flex justify-center items-center '>
                            <img className=' lg:h-3/4 max-[600px]:h-60 lg:absolute lg:bottom-[-20px] lg:left-[50px] mt-9 ' src={profile} alt="profile" />
                        </div>
                        <div className='lg:w-1/2'>
                            <div className='p-4'>
                                <p className='text-white text-center lg:text-left'>hello</p>
                                <AnimatedTextCharacter text="i love you tasfy" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Home;