import React from 'react';
import banner from '../../assets/background-image.jpg'
import AnimatedPage from '../../components/animation/animatedPage';

const Resume = () => {
    return (
        <AnimatedPage>
            <section className='mt-10'>
                <div
                    style={{ backgroundImage: `url(${banner})` }}
                    className='lg:h-[130px] max-[600px]:h-[500px] relative rounded-t-lg flex justify-center items-center'
                >
                    <h1 className='text-[#2eca7f] font-bold text-3xl '>Resume</h1>
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-4 max-w-4xl mx-auto'>
                        <div >
                            <h1>Education</h1>
                            <div className='border-l-2 border-[#857979]'>
                                <div className='ms-3' >
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4">
                                        <div className="card-body">
                                            <h2 className="card-title text-[#212121]">Sonargaon University(SU)</h2>
                                            <p className='text-[#2eca7f]'>2022 <span>continue</span></p>
                                            <p>BS.C In Engineering Mechanical</p>

                                        </div>
                                    </div>
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4">
                                        <div className="card-body">
                                            <h2 className="card-title text-[#212121]">Mymensingh Polytechnic</h2>
                                            <p className='text-[#2eca7f]'>2016 <span className='ms-1'>-</span><span className='ms-1'>2020</span></p>
                                            <p>diploma in Engineering</p>
                                        </div>
                                    </div>
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4">
                                        <div className="card-body">
                                            <h2 className="card-title text-[#212121]">Career Objective</h2>
                                            <p>I am a web developer who is proficient in both back-end and front-end frameworks. My passion lies in learning about the
                                                latest technologies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <h1>Projects</h1>
                            <div className='border-l-2 border-[#857979]'>
                                <div className='ms-3' >
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4">
                                        <div className="card-body">
                                            <h2 className="card-title text-[#212121]">Sonargaon University(SU)</h2>
                                            <p className='text-[#2eca7f]'>2022 <span>continue</span></p>
                                            <p>BS.C In Engineering Mechanical</p>

                                        </div>
                                    </div>
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4">
                                        <div className="card-body">
                                            <h2 className="card-title text-[#212121]">Mymensingh Polytechnic</h2>
                                            <p className='text-[#2eca7f]'>2016 <span className='ms-1'>-</span><span className='ms-1'>2020</span></p>
                                            <p>diploma in Engineering</p>
                                        </div>
                                    </div>
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4">
                                        <div className="card-body">
                                            <h2 className="card-title text-[#212121]">Career Objective</h2>
                                            <p>I am a web developer who is proficient in both back-end and front-end frameworks. My passion lies in learning about the
                                                latest technologies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Resume;