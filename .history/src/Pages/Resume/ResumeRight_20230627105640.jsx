import React from 'react';

const ResumeRight = () => {
    return (
        <div>
            <h1 className='text-center mt-3 mb-2 ms-10 text-xl text-[#424242] font-bold font-poppins'>Projects</h1>
            <div className='border-l-2 border-[#857979] max-[600px]:border-none'>
                <div className='ms-3' >
                    <div className="card rounded-none w-96  shadow-xl border-l-4 border-[#2eca7f] mt-4 max-[600px]:mx-auto">
                        <div className="card-body">
                            <h2 className="card-title text-[#212121]">Smart Watch Resales</h2>
                            <p className='text-[#2eca7f] font-bold '>duration: <span className='text-[#424242] font-normal'>Six month ago</span></p>
                            <a className='text-[#2eca7f] font-bold' href="https://organic-food-d154a.web.app/" target="_blank">live Link</a>
                        </div>
                    </div>
                    <div className="card rounded-none w-96  shadow-xl border-l-4 border-[#2eca7f] mt-4 max-[600px]:mx-auto">
                        <div className="card-body">
                            <h2 className="card-title text-[#212121]">Tone-Tutors</h2>
                            <p className='text-[#2eca7f] font-bold'>duration: <span className='text-[#424242] font-normal'>Few month ago</span></p>
                            <a className='text-[#2eca7f] font-bold' href="https://stellular-pie-0c3174.netlify.app/" target="_blank">live Link</a>
                        </div>
                    </div>
                    <div className="card rounded-none w-96  shadow-xl border-l-4 border-[#2eca7f] mt-4 max-[600px]:mx-auto">
                        <div className="card-body">
                            <h2 className="card-title text-[#212121]">Car Playground</h2>
                            <p className='text-[#2eca7f] font-bold'>duration: <span className='text-[#424242] font-normal'>Recently</span></p>
                            <a className='text-[#2eca7f] font-bold' href="https://rainbow-starburst-ccc181.netlify.app/" target="_blank">live Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeRight;