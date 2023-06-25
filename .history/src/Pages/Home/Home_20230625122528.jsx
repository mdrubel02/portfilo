import React from 'react';
import profile from '../../assets/nayeem.jpg'
import AnimatedTextCharacter from '../../assets/animation/AnimatedTextCharacter/AnimatedTextCharacter';
import Lottie from "lottie-react";
import banner from '../../assets/animation/lottle/banner.json'

const Home = () => {
    return (
        // <div className='mt-3 '>
        //     <div className='h-[310px]  bg-red-600 relative rounded-t-lg'>
        //         <div className='grid grid-rows-2 grid-flow-col gap-2'>
        //             <div className=''>
        //                 <div class=" h-full">
        //                     <img className='h-3/4 lg:absolute lg:bottom-[-20px] lg:left-[50px]' src={profile} alt="profile" />
        //                 </div>
        //             </div>

        //             <div className='flex-1 h-[25px] flex justify-start items-center order-last z-10'>
        //                 <div className=' '>
        //                     <p>hello</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='mt-3'>
            <div className='lg:h-[310px] max-[600px]:h-[450px] bg-red-600  relative rounded-t-lg'>
                <Lottie
                    className='absolute top-0 left-0  lg:z-0 '
                    animationData={banner}
                    loop={true}
                />
                    <div className='lg:flex mt-4'>
                        <div className='lg:w-1/2 flex justify-center items-center '>
                            <img className=' lg:h-3/4 max-[600px]:h-60 lg:absolute lg:bottom-[-20px] lg:left-[50px] mt-9 max-[600px]:z-1' src={profile} alt="profile" />
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