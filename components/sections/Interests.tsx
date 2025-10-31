import React from 'react';
import { Interest } from '../types';

interface InterestsProps {
    interests: Interest[];
}

const Interests: React.FC<InterestsProps> = ({ interests }) => (
    <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Areas of Interest</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
                <div key={index} className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-light-accent/40 dark:hover:shadow-dark-accent/20">
                    <img src={interest.icon} alt={`${interest.title} icon`} className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{interest.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Interests;
