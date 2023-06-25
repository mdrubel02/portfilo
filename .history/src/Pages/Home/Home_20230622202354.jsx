import React from 'react';
import profile from '../../assets/nayeem.jpg'

const Home = () => {
    return (
        <div className='mt-3 '>
            <div className='h-[310px] bg-red-600 relative'>
                <div className=''>
                        <p>Relative parent</p>
                        <div class="absolute bottom-0 left-0 ...">
                            <p>Absolute child</p>
                        </div>
                    
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Home;