import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaPlaneDeparture, FaStickyNote } from "react-icons/fa";
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AnimatedPage from '../../components/animation/animatedPage';

const Details = () => {
    const data = useLoaderData();
    ;
    return (
        <>
            <AnimatedPage>
                <div className='shadow-lg px-3 py-2 mt-10'>
                    <SectionTitle title="My Project Details"></SectionTitle>
                    <div className='w-[100%] mx-auto'>
                        <div className="w-full rounded-lg mt-5 mb-9">
                            <img alt='' src={data?.image} className="w-full h-[390px] rounded-xl" />
                        </div>

                        <div className='flex gap-x-6'>
                            <div className='w-[45%]'>
                                <h1 className='font-bold text-3xl mb-2 text-secondary'>{data?.name}</h1>
                                <h3 className='font-semibold text-md mb-2'>{data?.description}</h3>
                                <div>

                                    <button className='btn btn-sm mb-3 bg-[#2eca7f] border-0 text-white hover:bg-white hover:text-[#2eca7f] hover:drop-shadow-xl ms-2'><a href={data?.live_site} target="_blank">Live Website</a></button>
                                    <button className='btn btn-sm mb-3 bg-[#2eca7f] border-0 text-white hover:bg-white hover:text-[#2eca7f] hover:drop-shadow-xl ms-2'><a href={data?.client_code} target="_blank">Client-Site Code</a></button>
                                    <button className='btn btn-sm mb-3 bg-[#2eca7f] border-0 text-white hover:bg-white hover:text-[#2eca7f] hover:drop-shadow-xl ms-2'><a href={data?.server_code} target="_blank">Server-Site Code</a></button>
                                </div>
                            </div>

                            <div className='w-[55%]'>
                                <h1 className='flex items-center mb-2'><FaPlaneDeparture className='text-primary text-2xl mr-2' /> <p className='font-bold text-xl text-secondary'>Technology</p></h1>
                                {
                                    data?.technology.map((tech) => <div className="badge badge-primary badge-outline mr-2 mb-4" >{tech}</div>)
                                }
                                <h1 className='flex items-center mb-2 mt-4'><FaStickyNote className='text-accent text-2xl mr-2' /> <p className='font-bold text-xl'>Top Features</p></h1>
                                {
                                    data?.features.map((feature) =>
                                        <label className='flex mb-1'>
                                            <input type="checkbox" checked className="checkbox checkbox-sm checkbox-accent mr-2 mt-[2px]" />
                                            <p className="">{feature}</p>
                                        </label>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedPage>
        </>
    );
};

export default Details;