import React from 'react';
import banner from '../../assets/background-image.jpg'
import AnimatedPage from '../../components/animation/animatedPage';

const Resume = () => {
    return (
        <AnimatedPage>
            <section className='mt-10'>
                <div
                    style={{ backgroundImage: `url(${banner})` }}
                    className='lg:h-[130px] max-[600px]:h-[120px] relative rounded-t-lg flex justify-center items-center'
                >
                    <h1 className='text-[#2eca7f] font-bold text-3xl '>Resume</h1>
                </div>
                <div>
                    <div className='grid lg:grid-cols-2 max-[600px]:grid-cols-1 gap-4 lg:max-w-4xl mx-auto max-[600px]:ms-3'>
                        <div >
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
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4 max-[600px]:mx-auto">
                                        <div className="card-body">
                                            <h2 className="card-title text-[#212121]">Mymensingh Polytechnic</h2>
                                            <p className='text-[#2eca7f]'>2016 <span className='ms-1'>-</span><span className='ms-1'>2020</span></p>
                                            <p>diploma in Engineering</p>
                                        </div>
                                    </div>
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4 max-[600px]:mx-auto">
                                        <div className="card-body">
                                            <h2 className="card-title text-[#212121]">Career Objective</h2>
                                            <p className='text-xs'>I am a web developer who is proficient in both back-end and front-end frameworks. My passion lies in learning about the
                                                latest technologies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <h1 className='text-center mt-3 mb-2 ms-10 text-xl text-[#424242] font-bold font-poppins'>Projects</h1>
                            <div className='border-l-2 border-[#857979] max-[600px]:border-none'>
                                <div className='ms-3' >
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4 max-[600px]:mx-auto">
                                        <div className="card-body">
                                            <h2 className="card-title text-[#212121]">Smart Watch Resales</h2>
                                            <p className='text-[#2eca7f] font-bold text-xs'>duration: <span className='text-[#424242] font-normal'>Six month ago</span></p>
                                            <a className='text-[#2eca7f] font-bold' href="https://organic-food-d154a.web.app/" target="_blank">live Link</a>
                                        </div>
                                    </div>
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4 max-[600px]:mx-auto">
                                    <div className="card-body">
                                            <h2 className="card-title text-[#212121]">Smart Watch Resales</h2>
                                            <p className='text-[#2eca7f] font-bold'>duration: <span className='text-[#424242] font-normal'>Six month ago</span></p>
                                            <a className='text-[#2eca7f] font-bold' href="https://organic-food-d154a.web.app/" target="_blank">live Link</a>
                                        </div>
                                    </div>
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4 max-[600px]:mx-auto">
                                    <div className="card-body">
                                            <h2 className="card-title text-[#212121]">Smart Watch Resales</h2>
                                            <p className='text-[#2eca7f] font-bold'>duration: <span className='text-[#424242] font-normal'>Few month ago</span></p>
                                            <a className='text-[#2eca7f] font-bold' href="https://organic-food-d154a.web.app/" target="_blank">live Link</a>
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