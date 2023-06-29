import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AnimatedPage from '../../components/animation/animatedPage';
import SingleProjects from './SingleProjects';
import Spinner from '../../components/Spinner/Spinner';

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [projectsLoader, setProjectsLoader] = useState(false)

    useEffect(() => {
        setProjectsLoader(true)
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
        setProjectsLoader(false)
    }, [])


    return (
        <>
        {projectsLoader ? <Spinner></Spinner>:  <AnimatedPage>
        <section className='mt-10 shadow-lg'>
            <SectionTitle title="My Projects"></SectionTitle>
            <div>
                <div className='grid lg:grid-cols-2 max-[600px]:grid-cols-1 gap-4 lg:max-w-4xl mx-auto max-[600px]:ms-3 mt-12'>
                   {
                    projects.map(project => <SingleProjects key={project.id} project={project}></SingleProjects>)
                   }
                </div>
            </div>
        </section>
    </AnimatedPage>}
        </>
    );
};

export default Projects;