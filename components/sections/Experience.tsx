import React from 'react';
import { Experience as ExperienceType } from '../../types';

interface ExperienceProps {
    experience: ExperienceType[];
    allSkills: string[];
    extractTechnologies: (descriptions: string[], skillsList: string[]) => string[];
    highlightMetrics: (text: string) => React.ReactNode;
}

const Experience: React.FC<ExperienceProps> = ({ experience, allSkills, extractTechnologies, highlightMetrics }) => (
    <div className="animate-fade-in space-y-8">
        {experience.map((exp, index) => {
            const technologies = extractTechnologies(exp.description, allSkills);
            return (
                <div key={index} className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg dark:shadow-black/50 hover:shadow-2xl hover:shadow-gray-500/40 dark:hover:shadow-dark-accent/20 hover:-translate-y-1 transition-transform-shadow duration-300">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{exp.role}</h3>
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">{exp.company} &bull; {exp.location}</p>
                        </div>
                        <p className="text-sm text-light-accent dark:text-dark-accent font-mono mt-2 sm:mt-0 whitespace-nowrap">{exp.dates}</p>
                    </div>

                    {technologies.length > 0 && (
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Key Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map(tech => (
                                    <span key={tech} className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div>
                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Key Accomplishments</h4>
                        <ul className="space-y-2 list-disc list-inside text-light-text dark:text-dark-text">
                            {exp.description.map((desc, i) => <li key={i}>{highlightMetrics(desc)}</li>)}
                        </ul>
                    </div>
                </div>
            );
        })}
    </div>
);

export default Experience;