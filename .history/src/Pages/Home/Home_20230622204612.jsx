import React from 'react';
import profile from '../../assets/nayeem.jpg'

const Home = () => {
    return (
        <div className='mt-3 '>
            <div className='h-[310px] bg-red-600 relative rounded-t-lg'>
                <div className='flex'>
                    <div className='flex-1'>
                        <div class=" h-full">
                            <img className='h-3/4 absolute bottom-[-20px] left-[50px]' src={profile} alt="profile" />
                        </div>
                    </div>

                    <div className='flex-1 h-full'>
                        <div className='flex justify-start items-center '>
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;