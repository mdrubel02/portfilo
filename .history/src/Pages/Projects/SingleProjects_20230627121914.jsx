import React from 'react';
import { Link } from 'react-router-dom';

const SingleProjects = ({ project }) => {
    const { name, image, description, link } = project
    return (
        <div className="card w-96  shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions ">
                    <button className="btn btn-outline btn-sm bg-[#2eca7f] border-0 text-white hover:bg-white hover:text-[#2eca7f] hover:drop-shadow-xl"><a href={link} target="_blank">Live Link</a></button>
                    <button className="btn btn-outline btn-sm bg-[#2eca7f] border-0 text-white hover:bg-white hover:text-[#2eca7f] hover:drop-shadow-xl"><a href={link} target="_blank">Github</a></button>
                    <button className="btn btn-outline btn-sm bg-[#2eca7f] border-0 text-white hover:bg-white hover:text-[#2eca7f] hover:drop-shadow-xl"><Link>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default SingleProjects;