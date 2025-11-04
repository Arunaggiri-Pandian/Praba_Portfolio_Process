import React from 'react';
import { Experience as ExperienceType } from '../../types';

interface ExperienceProps {
    experience: ExperienceType[];
    allSkills: string[];
    extractTechnologies: (descriptions: string[], skillsList: string[]) => string[];
}

const Experience: React.FC<ExperienceProps> = ({ experience, allSkills, extractTechnologies }) => {
    const groupedExperience = experience.reduce((acc, exp) => {
        const company = acc.find(e => e.company === exp.company);
        if (company) {
            company.roles.push(exp);
        } else {
            acc.push({ company: exp.company, logo: exp.logo, location: exp.location, roles: [exp] });
        }
        return acc;
    }, [] as { company: string; logo?: string; location: string; roles: ExperienceType[] }[]);

    return (
        <div className="animate-fade-in space-y-8">
            {groupedExperience.map((group, index) => (
                <div key={index} className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg dark:shadow-black/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-light-accent/40 dark:hover:shadow-dark-accent/10">
                    <div className="flex items-start gap-4">
                        {group.logo && (
                            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white rounded-md p-1 shadow-md">
                                <img src={group.logo} alt={`${group.company} logo`} className="max-w-full max-h-full object-contain" />
                            </div>
                        )}
                        <div className="flex-grow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{group.company}</h3>
                                    <p className="text-md font-medium text-gray-600 dark:text-gray-400">{group.location}</p>
                                </div>
                            </div>
                            {group.roles.map((role, roleIndex) => {
                                const technologies = extractTechnologies(role.description, allSkills);
                                return (
                                    <div key={roleIndex} className="relative mt-4 pl-8 border-l-2 border-gray-300 dark:border-gray-700">
                                        <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-light-accent dark:bg-dark-accent"></div>
                                        <div className="mb-4">
                                            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{role.role}</h4>
                                                </div>
                                                <p className="text-sm text-light-accent dark:text-dark-accent font-mono mt-1 sm:mt-0 whitespace-nowrap">{role.dates}</p>
                                            </div>

                                            {technologies.length > 0 && (
                                                <div className="mb-4">
                                                    <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Key Technologies</h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {technologies.map(tech => (
                                                            <span key={tech} className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <div>
                                                <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Key Accomplishments</h5>
                                                <ul className="space-y-2 list-disc list-inside text-light-text dark:text-dark-text">
                                                    {role.description.map((desc, i) => <li key={i}>{desc}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;