import React from 'react';
import { Interest } from '../types';

interface InterestsProps {
    interests: Interest[];
}

const InterestCard: React.FC<{ interest: Interest }> = ({ interest }) => (
    <div className="group h-56 w-full [perspective:1000px]">
        <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:shadow-xl group-hover:shadow-light-accent/40 dark:group-hover:shadow-dark-accent/10">
            {/* Front Face */}
            <div className="absolute inset-0 [backface-visibility:hidden]">
                <div className="rounded-lg shadow-lg overflow-hidden h-full bg-light-card dark:bg-dark-card flex flex-col items-center justify-center p-4">
                    <img src={interest.icon} alt={`${interest.title} icon`} className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-center text-light-text dark:text-dark-text">{interest.title}</h3>
                </div>
            </div>
            {/* Back Face */}
            <div className="absolute inset-0 h-full w-full rounded-lg bg-light-card dark:bg-dark-card px-4 text-center text-gray-600 dark:text-gray-300 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                    <p className="text-sm">
                        {interest.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const Interests: React.FC<InterestsProps> = ({ interests }) => (
    <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Areas of Interest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
                <InterestCard key={index} interest={interest} />
            ))}
        </div>
    </section>
);

export default Interests;