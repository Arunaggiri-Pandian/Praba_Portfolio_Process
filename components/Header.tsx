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
        <header className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-4">
            <div className="flex flex-col md:flex-row items-center">
                <img
                    src="/profile.png"
                    alt={personalInfo.name}
                    className="w-36 h-36 rounded-full mb-4 md:mb-0 md:mr-8 transition-all duration-300 hover:border-4 hover:border-light-accent dark:hover:border-dark-accent"
                />
                <div>
                    <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
                    <div className="flex flex-wrap justify-center md:justify-start gap-x-4 mt-2">
                        <a href={`mailto:${personalInfo.email}`} className="flex items-center text-sm group">
                            <Icon name="email" className="w-4 h-4 mr-2 text-light-accent dark:text-dark-accent" />
                            <span className="text-gray-600 dark:text-gray-400 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                                {personalInfo.email}
                            </span>
                        </a>
                        <a href={`tel:${personalInfo.phone}`} className="flex items-center text-sm group">
                            <Icon name="phone" className="w-4 h-4 mr-2 text-light-accent dark:text-dark-accent" />
                            <span className="text-gray-600 dark:text-gray-400 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                                {personalInfo.phone}
                            </span>
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm group">
                            <Icon name="linkedin" className="w-4 h-4 mr-2 text-light-accent dark:text-dark-accent" />
                            <span className="text-gray-600 dark:text-gray-400 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                                LinkedIn
                            </span>
                        </a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm group">
                            <Icon name="github" className="w-4 h-4 mr-2 text-light-accent dark:text-dark-accent" />
                            <span className="text-gray-600 dark:text-gray-400 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                                GitHub
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute top-4 right-4 md:relative md:top-auto md:right-auto md:mt-0 md:ml-8">
                <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
        </header>
    );
};

export default Header;