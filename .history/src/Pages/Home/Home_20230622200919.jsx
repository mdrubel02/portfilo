import React from 'react';
import profile from '../../assets/nayeem.jpg'

const Home = () => {
    return (
        <div className='mt-3'>
            <div className='h-[310px] bg-red-600'>
                <div className='grid grid-rows-2 grid-flow-col gap-4'>
                    <div className=''>
                        <div className='relative h-full'>
                        <img className='h-2/4' src={profile} alt="profile" />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Home;