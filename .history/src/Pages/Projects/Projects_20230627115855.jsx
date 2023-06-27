import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AnimatedPage from '../../components/animation/animatedPage';
import SingleProjects from './SingleProjects';

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <AnimatedPage>
        <section className='mt-10 shadow-lg'>
            <SectionTitle title="My Projects"></SectionTitle>
            <div>
                <div className='grid lg:grid-cols-2 max-[600px]:grid-cols-1 gap-4 lg:max-w-4xl mx-auto max-[600px]:ms-3'>
                   {
                    projects.map(project => <SingleProjects key={project.id} project={project}></SingleProjects>)
                   }
                </div>
            </div>
        </section>
    </AnimatedPage>
    );
};

export default Projects;