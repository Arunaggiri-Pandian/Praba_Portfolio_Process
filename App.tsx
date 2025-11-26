

import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from './constants';
import Header from './components/Header';
import Navigation, { Tab } from './components/Navigation';
import Home from './components/sections/Home';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Publications from './components/sections/Publications';
import PasswordProtect from './components/PasswordProtect';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('Home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    // Bypass authentication if password protection is not enabled in .env
    if (import.meta.env.VITE_PASSWORD_PROTECT !== 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const { personalInfo, education, skills, experience, projects, publications } = RESUME_DATA;

  const allSkills = Object.values(skills).flat();

  const extractTechnologies = (descriptions: string[], skillsList: string[]): string[] => {
    const foundSkills = new Set<string>();
    const descriptionsText = descriptions.join(' ').toLowerCase();
  
    skillsList.forEach(skill => {
      const skillRegex = new RegExp(`\\b${skill.toLowerCase().replace('++', '\\+\\+')}\\b`, 'i');
      if (skillRegex.test(descriptionsText)) {
        foundSkills.add(skill);
      }
    });
  
    return Array.from(foundSkills);
  };

  const highlightMetrics = (text: string) => {
    const parts = text.split(/(\b\d+%?\b)/g);
    return (
      <span>
        {parts.map((part, i) =>
          /(\b\d+%?\b)/.test(part) ? (
            <strong key={i} className="font-bold text-light-accent dark:text-dark-accent">
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home setActiveTab={setActiveTab} />;
      case 'Experience':
        return <Experience 
                  experience={experience} 
                  allSkills={allSkills} 
                  extractTechnologies={extractTechnologies} 
                  highlightMetrics={highlightMetrics} 
                />;
      case 'Education':
        return <Education education={education} />;
      case 'Projects':
        return <Projects projects={projects} />;
      case 'Skills':
        return <Skills skills={skills} />;
      case 'Publications':
        return <Publications publications={publications} />;
      default:
        return null;
    }
  };

  if (!isAuthenticated) {
    return <PasswordProtect onAuthenticate={() => setIsAuthenticated(true)} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
  }

  return (
    <div className="text-light-text dark:text-dark-text min-h-screen font-sans">
      <div className="container mx-auto p-4 md:p-8">
        
        <Header 
          personalInfo={personalInfo}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />

        <Navigation 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <main className="mt-8">
          <div key={activeTab} className="mt-8 bg-light-card dark:bg-dark-card/50 rounded-xl p-6 md:p-8 shadow-2xl ring-1 ring-gray-900/5 dark:ring-white/10">
            {renderContent()}
          </div>
        </main>

        <footer className="text-center mt-8 pt-8 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Prabalakshmi Arumugam. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;