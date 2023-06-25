import React from 'react';
import profile from '../../assets/nayeem.jpg'

const Home = () => {
    return (
        <div className='mt-3 '>
            <div className='h-[310px] bg-red-600 relative'>
                <div className='flex'>
                    <div className='flex-1'>
                        <div class=" h-full">
                            <img className='h-3/4 absolute bottom-[-10px] left-0' src={profile} alt="profile" />
                        </div>
                    </div>

                    <div className='flex-1'><p>hello div</p></div>
                </div>
            </div>
        </div>
    );
};

export default Home;