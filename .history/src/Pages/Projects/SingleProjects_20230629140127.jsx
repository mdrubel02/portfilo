import React from 'react';
import { Link } from 'react-router-dom';

const SingleProjects = ({ project }) => {
    const { name, image, description, link ,github, id } = project
    return (
        <div className="card w-96  shadow-xl mb-4">
            <figure className='-48 rounded-md mx-auto w-[90%] cursor-pointer'><img className='h-full grayscale rounded-md hover:grayscale-0 transition-all duration-700 ease-in hover:scale-[1.2]' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl text-[#424242] font-bold font-poppins">{name}</h2>
                <p className='text-[#212121]'>{description}</p>
                <div className="card-actions ">
                    <button className="btn btn-outline btn-sm bg-[#2eca7f] border-0 text-white hover:bg-white hover:text-[#2eca7f] hover:drop-shadow-xl"><a href={link} target="_blank">Live Link</a></button>
                    <button className="btn btn-outline btn-sm bg-[#2eca7f] border-0 text-white hover:bg-white hover:text-[#2eca7f] hover:drop-shadow-xl"><a href={github} target="_blank">Github</a></button>
                    <button className="btn btn-outline btn-sm bg-[#2eca7f] border-0 text-white hover:bg-white hover:text-[#2eca7f] hover:drop-shadow-xl"><Link to={`/details/${id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default SingleProjects;