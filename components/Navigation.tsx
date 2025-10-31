import React from 'react';

export type Tab = 'Home' | 'Experience' | 'Education' | 'Projects' | 'Skills' | 'Publications';
const TABS: Tab[] = ['Home', 'Experience', 'Education', 'Projects', 'Skills', 'Publications'];

interface NavigationProps {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
    return (
        <nav className="mb-8 overflow-x-auto md:overflow-visible">
            <ul className="flex justify-center border-b border-gray-300 dark:border-gray-700">
                {TABS.map(tab => (
                    <li key={tab} className="-mb-px">
                        <button
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${activeTab === tab
                                    ? 'border-b-2 border-light-accent dark:border-dark-accent text-light-accent dark:text-dark-accent'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-light-text dark:hover:text-dark-text'
                                }`}
                        >
                            {tab}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;