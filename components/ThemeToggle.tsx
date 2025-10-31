import React from 'react';
import Icon from './Icon';

interface ThemeToggleProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="p-2 mt-4 sm:mt-0 rounded-full bg-light-card dark:bg-dark-card"
            aria-label="Toggle theme"
        >
            <Icon name={isDarkMode ? 'sun' : 'moon'} className="w-6 h-6" />
        </button>
    );
};

export default ThemeToggle;
