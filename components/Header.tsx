import React from 'react';
import { PersonalInfo } from '../types';
import Icon from './Icon';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
    personalInfo: PersonalInfo;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ personalInfo, isDarkMode, toggleTheme }) => {
    return (
        <header className="relative mb-4">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold">{personalInfo.name}</h1>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">{personalInfo.location}</p>
            </div>
            <div className="absolute top-0 right-0">
                <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
                <a href={`tel:${personalInfo.phone}`} className="flex items-center group">
                    <Icon name="phone" className="w-4 h-4 mr-2 text-light-accent dark:text-dark-accent" />
                    <span className="text-gray-600 dark:text-gray-400 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                        {personalInfo.phone}
                    </span>
                </a>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center group">
                    <Icon name="email" className="w-4 h-4 mr-2 text-light-accent dark:text-dark-accent" />
                    <span className="text-gray-600 dark:text-gray-400 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                        {personalInfo.email}
                    </span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <Icon name="linkedin" className="w-4 h-4 mr-2 text-light-accent dark:text-dark-accent" />
                    <span className="text-gray-600 dark:text-gray-400 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                        LinkedIn
                    </span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <Icon name="github" className="w-4 h-4 mr-2 text-light-accent dark:text-dark-accent" />
                    <span className="text-gray-600 dark:text-gray-400 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                        GitHub
                    </span>
                </a>
            </div>
        </header>
    );
};

export default Header;