import React from 'react';
import { Project } from '../../types';

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
    <section className="animate-fade-in space-y-6">
        {projects.map((project, index) => (
            <div key={index} className="p-6 bg-light-card dark:bg-dark-card rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10">
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{project.title}</h3>
                <p className="text-sm font-mono text-light-accent dark:text-dark-accent my-2">{project.technologies}</p>
                <ul className="list-disc list-outside ml-5 mt-2 space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                    {project.description.map((desc, i) => <li key={i}>{desc}</li>)}
                </ul>
            </div>
        ))}
    </section>
);

export default Projects;