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
                            <div className='border-l-4 border-[#2eca7f]'>
                                <div className='ms-2' >
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl border-l-4 border-[#2eca7f] mt-4">
                                        <div className="card-body">
                                            <h2 className="card-title text-[#212121]">Sonargaon University(SU)</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>part 8</div>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Resume;