import React from 'react';
import profile from '../../assets/nayeem.jpg'

const Home = () => {
    return (
        <div className='mt-3 '>
            <div className='h-[310px] bg-red-600 relative'>
                <div className='d-flex'>
                        <div class="absolute bottom-0 left-0 h-full">
                            <img className='h-2/5' src={profile} alt="profile" />
                        </div>
                    
                    <div className=''><p>hello div</p></div>
                </div>
            </div>
        </div>
    );
};

export default Home;