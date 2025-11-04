import React from 'react';
import { RESUME_DATA } from '../../constants';
import Interests from './Interests';
import Hobbies from './Hobbies';

const Home: React.FC = () => {
  return (
    <>
      <section className="animate-fade-in bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-lg dark:shadow-black/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-light-accent/40 dark:hover:shadow-dark-accent/10">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src="/profile.png"
              alt="Prabalakshmi Balasubramani"
              className="rounded-xl w-48 h-56 object-cover shadow-lg border-4 border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:border-light-accent/70 dark:hover:border-dark-accent/70"
            />
            <a
              href="/Prabalakshmi_Arumugam_Resume.pdf"
              download
              className="mt-4 inline-flex items-center px-4 py-2 bg-transparent text-light-accent dark:text-dark-accent font-semibold rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-light-accent dark:hover:border-dark-accent transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Resume
            </a>
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
      <Hobbies hobbies={RESUME_DATA.hobbies} />
    </>
  );
};

export default Home;