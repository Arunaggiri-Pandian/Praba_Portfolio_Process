import React from 'react';
import { RESUME_DATA } from '../../constants';
import Interests from './Interests';
import FunFact from '../FunFact';
import Hobbies from './Hobbies';
import type { Tab } from '../Navigation';

const ViewAllButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="mt-4 text-sm font-semibold text-light-accent dark:text-dark-accent hover:text-light-accent/80 dark:hover:text-dark-accent/80 transition-colors duration-300 group"
    >
      {children} <span className="transition-transform duration-300 inline-block group-hover:translate-x-1">→</span>
    </button>
  );

const Home: React.FC<{ setActiveTab: (tab: Tab) => void }> = ({ setActiveTab }) => {
    const dishNetworkExperience = RESUME_DATA.experience.find(exp => exp.company === 'Dish Network Technologies');
    const teachingAssistantExperience = RESUME_DATA.experience.find(exp => exp.role === 'Graduate Teaching Assistant');

    const recentExperiences = [];
    if (teachingAssistantExperience) {
        recentExperiences.push(teachingAssistantExperience);
    }
    if (dishNetworkExperience) {
        recentExperiences.push(dishNetworkExperience);
    }

    const recentProjects = RESUME_DATA.projects.graduate.slice(0, 2);

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">About Me</h2>
      <section className="animate-fade-in">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src="/profile.png"
              alt="Prabalakshmi Balasubramani"
              className="rounded-xl w-48 h-56 object-cover shadow-lg border-4 border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:border-light-accent/70 dark:hover:border-dark-accent/70"
            />
          </div>
          <div className="text-gray-600 dark:text-gray-400 space-y-4 text-justify">
            <p>
              I am a semiconductor professional with a Master’s degree in Electrical and Computer Engineering from Boise State University, driven by a profound interest in the entire silicon lifecycle, from physical design to high-volume manufacturing. My goal is to apply my foundational knowledge in VLSI and my analytical skills to solve complex challenges in semiconductor process engineering, specifically within photolithography.
            </p>
            <p>
              During my time at Dish Network, I developed a strong skillset in process automation and data analysis, using Python and Django to optimize large-scale backend services. I am adept at identifying process bottlenecks and implementing robust software solutions to improve system efficiency and reliability—skills I am eager to apply to the vast datasets and automated systems used in a modern wafer fab for process control and yield enhancement.
            </p>
            <p>
              My passion for the physical side of semiconductor technology is demonstrated through my internship at Delta Electronics and extensive academic projects. My work on low-noise neural amplifiers and DRAM-based accelerators required a deep understanding of physical layout, process constraints (DRC), and the critical impact of layout on device performance and manufacturability. I am well-versed in EDA tools and am driven to leverage this design-level perspective to innovate and optimize fabrication processes at the heart of semiconductor manufacturing.
            </p>
          </div>
        </div>
      </section>

      <Interests interests={RESUME_DATA.interests} />

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center md:text-left">Recent Activity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Experience Column */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Recent Experience</h4>
            <div className="space-y-4">
              {recentExperiences.map((role, index) => (
                <div key={index} className="p-4 bg-slate-100 dark:bg-slate-800/80 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-light-accent/10 dark:hover:shadow-dark-accent/10">
                  <h5 className="font-bold text-light-accent dark:text-dark-accent">{role.role}</h5>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{role.company}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{role.dates}</p>
                </div>
              ))}
            </div>
            <ViewAllButton onClick={() => setActiveTab('Experience')}>View All Experience</ViewAllButton>
          </div>

          {/* Latest Projects Column */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Latest Projects</h4>
            <div className="space-y-4">
              {recentProjects.map((proj, index) => (
                <div key={index} className="p-4 bg-slate-100 dark:bg-slate-800/80 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-light-accent/10 dark:hover:shadow-dark-accent/10">
                  <h5 className="font-bold text-light-accent dark:text-dark-accent truncate">{proj.title}</h5>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{proj.technologies}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{proj.date}</p>
                </div>
              ))}
            </div>
            <ViewAllButton onClick={() => setActiveTab('Projects')}>View All Projects</ViewAllButton>
          </div>
        </div>
      </div>

      <Hobbies hobbies={RESUME_DATA.hobbies} />
      <FunFact />
    </>
  );
};


export default Home;