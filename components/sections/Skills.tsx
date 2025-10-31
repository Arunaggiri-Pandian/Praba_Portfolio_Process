import React from 'react';
import { Skills as SkillsType } from '../../types';

interface SkillsProps {
    skills: SkillsType;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => (
    <section className="animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(skills).map((category) => (
                <div key={category} className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-lg dark:shadow-black/50">
                    <h3 className="text-lg font-semibold text-light-accent dark:text-dark-accent mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills[category].map(skill => (
                            <span
                                key={skill}
                                className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-200 hover:scale-105 hover:bg-light-accent hover:text-white dark:hover:bg-dark-accent dark:hover:text-dark-bg"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;