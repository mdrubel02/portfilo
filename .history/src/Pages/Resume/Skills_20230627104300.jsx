import React from 'react';

const Skills = () => {
    return (
        <div>
            <h1>skills</h1>
            <div className='grid lg:grid-cols-2 max-[600px]:grid-cols-1 gap-4 lg:max-w-4xl mx-auto max-[600px]:ms-3'>
                <div >
                    <progress className="progress progress-success w-56" value={0} max="100"></progress>
                    <progress className="progress progress-success w-56" value="10" max="100"></progress>
                    <progress className="progress progress-success w-56" value="40" max="100"></progress>
                </div>
                <div>
                    <progress className="progress progress-[#2eca7f] w-56" value={0} max="100"></progress>
                    <progress className="progress progress-success w-56" value="10" max="100"></progress>
                    <progress className="progress progress-success w-56" value="40" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;