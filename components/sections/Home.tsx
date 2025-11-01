import React from 'react';
import { RESUME_DATA } from '../../constants';
import Interests from './Interests';
import Hobbies from './Hobbies';

const Home: React.FC = () => {
  return (
    <>
      <section className="animate-fade-in bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-lg dark:shadow-black/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-light-accent/40 dark:hover:shadow-dark-accent/10">
        <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>
        <p className="mb-4">
          I am a highly motivated and results-oriented engineer with a Master's degree in Electrical and Computer Engineering from Boise State University. My academic background and professional experience have provided me with a strong foundation in both software development and hardware design.
        </p>
        <p className="mb-4">
          As a Software Engineer at Dish Network, I honed my skills in backend development, optimizing services for the Sling streaming platform using Python and Django. I have a proven track record of improving system performance, having reduced server response times by 25% and API latency by 20%. I am also proficient in modern DevOps practices, including CI/CD with Jenkins and containerization with Docker and Kubernetes.
        </p>
        <p>
          My passion for hardware is demonstrated through my internship at Delta Electronics and extensive academic projects in areas like low-noise neural amplifier design, DRAM-based in-memory accelerators, and AXI-based peripheral design and verification using Verilog and SystemVerilog. I am well-versed in a variety of EDA tools and simulation environments. I am eager to leverage my diverse skill set to tackle challenging problems at the intersection of hardware and software.
        </p>
      </section>
      <Interests interests={RESUME_DATA.interests} />
      <Hobbies hobbies={RESUME_DATA.hobbies} />
    </>
  );
};

export default Home;