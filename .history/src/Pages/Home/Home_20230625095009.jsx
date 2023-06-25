import React from 'react';
import profile from '../../assets/nayeem.jpg'

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
            <div className='h-[310px] bg-red-600  relative rounded-t-lg'>
                <div className='lg:flex '>
                    <div className='lg:w-1/2'>
                        <img className=' lg:h-3/4 sm:h-40 lg:absolute lg:bottom-[-20px] lg:left-[50px]' src={profile} alt="profile" />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className='p-4'>
                            <p className='text-white text-center lg:text-left'>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;