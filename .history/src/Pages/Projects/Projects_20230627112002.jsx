import React from 'react';

const Projects = () => {
    return (
        <AnimatedPage>
        <section className='mt-10 shadow-lg'>
            <SectionTitle title="My Projects"></SectionTitle>
            <div>
                <div className='grid lg:grid-cols-2 max-[600px]:grid-cols-1 gap-4 lg:max-w-4xl mx-auto max-[600px]:ms-3'>
                   <h1>my projects </h1>
                </div>
            </div>
        </section>
    </AnimatedPage>
    );
};

export default Projects;