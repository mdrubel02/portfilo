import React from 'react';

const Skills = () => {
    return (
        <div>
            <h1 className='text-center mt-3 mb-2 ms-10 text-xl text-[#424242] font-bold font-poppins mt-14 mb-3'>Coding <span className='text-primary '>Skills</span></h1>
            <div className='grid lg:grid-cols-2 max-[600px]:grid-cols-1 gap-4 lg:max-w-4xl mx-auto max-[600px]:ms-3'>
                <div >
                    <progress className="progress progress-success w-56" value={0} max="100"></progress>
                    <progress className="progress progress-success w-56" value="10" max="100"></progress>
                    <progress className="progress progress-success w-56" value="40" max="100"></progress>
                </div>
                <div>
                    <progress className="progress progress-primary w-56" value={0} max="100"></progress>
                    <progress className="progress progress-success w-56" value="10" max="100"></progress>
                    <progress className="progress progress-success w-56" value="40" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;