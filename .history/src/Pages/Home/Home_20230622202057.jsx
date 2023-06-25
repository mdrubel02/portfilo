import React from 'react';
import profile from '../../assets/nayeem.jpg'

const Home = () => {
    return (
        <div className='mt-3 '>
            <div className='h-[310px] bg-red-600'>
                <div className='grid grid-rows-2 grid-flow-col gap-4'>
                    <div class="relative ...">
                        <p>Relative parent</p>
                        <div class="absolute bottom-0 left-0 ...">
                            <img src={profile} alt="profile" />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Home;