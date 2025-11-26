import React from 'react';
import { Interest } from '../../types';

interface InterestsProps {
    interests: Interest[];
}

const InterestCard: React.FC<{ icon: string; name: string; description: string }> = ({ icon, name, description }) => (
    <div className="group h-64 w-full [perspective:1000px]">
      <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-light-accent/10 dark:group-hover:shadow-dark-accent/10">
        {/* Front Face */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="rounded-lg shadow-lg overflow-hidden h-full bg-light-card dark:bg-dark-card/80">
            <div className="h-3/4 overflow-hidden">
              <img 
                src={icon} 
                alt={name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="h-1/4 p-2 text-center flex items-center justify-center">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</p>
            </div>
          </div>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-lg bg-light-card dark:bg-dark-card/80 px-4 text-center text-slate-600 dark:text-slate-300 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <p className="text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

const Interests: React.FC<InterestsProps> = ({ interests }) => (
    <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Areas of Interest</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {interests.map((interest) => (
                <InterestCard key={interest.title} icon={interest.icon} name={interest.title} description={interest.description} />
            ))}
        </div>
    </section>
);

export default Interests;