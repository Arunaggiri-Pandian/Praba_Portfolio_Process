import React from 'react';
import { Project } from '../../types';

interface ProjectsProps {
    projects: {
        graduate: Project[];
        undergraduate: Project[];
    };
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="p-6 bg-light-card dark:bg-dark-card rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-light-accent/40 dark:hover:shadow-dark-accent/10 flex items-start space-x-6">
        {project.image && (
            <div className="w-1/5 flex-shrink-0">
                <img src={project.image} alt={`${project.title} icon`} className="w-full h-auto object-cover rounded-lg" />
            </div>
        )}
        <div className="w-4/5">
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{project.title}</h3>
            <p className="text-sm font-mono text-light-accent dark:text-dark-accent my-2">{project.technologies}</p>
            <ul className="list-disc list-outside ml-5 mt-2 space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                {project.description.map((desc, i) => {
                    const containsHtml = /<[a-z][\s\S]*>/i.test(desc);
                    if (containsHtml) {
                        return <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />;
                    } else {
                        return <li key={i}>{desc}</li>;
                    }
                })}
            </ul>
        </div>
    </div>
);

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
    <section className="animate-fade-in space-y-12">
        <div>
            <h2 className="text-2xl font-bold mb-6">Graduate Projects</h2>
            <div className="space-y-6">
                {projects.graduate.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
        <div>
            <h2 className="text-2xl font-bold mb-6">Undergraduate Projects</h2>
            <div className="space-y-6">
                {projects.undergraduate.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    </section>
);

export default Projects;