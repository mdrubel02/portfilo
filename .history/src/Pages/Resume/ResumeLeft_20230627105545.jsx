import React from 'react';

const ResumeLeft = () => {
    return (
        <div>
            <h1 className='text-center mt-3 mb-2 ms-10 text-xl text-[#424242] font-bold font-poppins'>Education</h1>
            <div className='border-l-2 border-[#857979] max-[600px]:border-none'>
                <div className='ms-3' >
                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4 max-[600px]:mx-auto">
                        <div className="card-body">
                            <h2 className="card-title text-[#212121]">Sonargaon University(SU)</h2>
                            <p className='text-[#2eca7f]'>2022 <span>continue</span></p>
                            <p>BS.C In Engineering Mechanical</p>

                        </div>
                    </div>
                    <div className="card rounded-none w-96  shadow-xl border-l-4 border-[#2eca7f] mt-4 max-[600px]:mx-auto">
                        <div className="card-body">
                            <h2 className="card-title text-[#212121]">Mymensingh Polytechnic</h2>
                            <p className='text-[#2eca7f]'>2016 <span className='ms-1'>-</span><span className='ms-1'>2020</span></p>
                            <p>diploma in Engineering</p>
                        </div>
                    </div>
                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4 max-[600px]:mx-auto">
                        <div className="card-body">
                            <h2 className="card-title text-[#212121]">Career Objective</h2>
                            <p className='text-sm'>I am a web developer who is proficient in both back-end and front-end frameworks. My passion lies in learning about the
                                latest technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeLeft;