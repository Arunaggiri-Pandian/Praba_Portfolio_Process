import React from 'react';
import { RESUME_DATA } from '../../constants';
import Interests from './Interests';
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
    if (dishNetworkExperience) {
        recentExperiences.push(dishNetworkExperience);
    }
    if (teachingAssistantExperience) {
        recentExperiences.push(teachingAssistantExperience);
    }

    const recentProjects = RESUME_DATA.projects.graduate.slice(0, 2);

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">About Me</h2>
      <section className="animate-fade-in bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-lg dark:shadow-black/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-light-accent/40 dark:hover:shadow-dark-accent/10">
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
              I am a highly motivated and results-oriented engineer with a Master's degree in Electrical and Computer Engineering from Boise State University. My academic background and professional experience have provided me with a strong foundation in both software development and hardware design.
            </p>
            <p>
              As a Software Engineer at Dish Network, I honed my skills in backend development, optimizing services for the Sling streaming platform using Python and Django. I have a proven track record of improving system performance, having reduced server response times by 25% and API latency by 20%. I am also proficient in modern DevOps practices, including CI/CD with Jenkins and containerization with Docker and Kubernetes.
            </p>
            <p>
              My passion for hardware is demonstrated through my internship at Delta Electronics and extensive academic projects in areas like low-noise neural amplifier design, DRAM-based in-memory accelerators, and AXI-based peripheral design and verification using Verilog and SystemVerilog. I am well-versed in a variety of EDA tools and simulation environments. I am eager to leverage my diverse skill set to tackle challenging problems at the intersection of hardware and software.
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
    </>
  );
};


export default Home;