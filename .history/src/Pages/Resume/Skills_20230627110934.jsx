import React from 'react';

const Skills = () => {
    return (
        <div className='mb-4'>
            <h1 className='text-center mt-12 mb-4 ms-10 text-xl text-[#424242] font-bold font-poppins'>Coding <span className='text-primary '>Skills</span></h1>
            <div className='grid lg:grid-cols-2 max-[600px]:grid-cols-1 gap-4 lg:max-w-4xl mx-auto max-[600px]:ms-3'>
                <div >
                    <p>Javascript</p>
                    <progress className="progress progress-success w-80" value={85} max="100"></progress>
                    <p>React js</p>
                    <progress className="progress progress-success w-80" value="90" max="100"></progress>
                    <p>Next js</p>
                    <progress className="progress progress-success w-80" value="40" max="100"></progress>
                </div>
                <div>
                <p>Mongodb</p>
                    <progress className="progress progress-success w-80" value={85} max="100"></progress>
                    <p>Express js</p>
                    <progress className="progress progress-success w-80" value="90" max="100"></progress>
                    <p>Html 5</p>
                    <progress className="progress progress-success w-80" value="95" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;