import React from 'react';
import { Publication } from '../types';

interface PublicationsProps {
    publications: Publication[];
}

const PublicationCard: React.FC<{ item: Publication }> = ({ item }) => {
    return (
        <div className="mb-6 p-4 bg-light-card dark:bg-dark-card rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10">
            <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.authors.map((author, index) => (
                    <span key={index} className={author.includes('Prabalakshmi Arumugam') ? 'font-bold text-light-text dark:text-dark-text' : ''}>
                        {author}{index < item.authors.length - 1 ? ', ' : ''}
                    </span>
                ))}
                . ({item.year}).
            </p>
            <h4 className="font-semibold text-light-accent dark:text-dark-accent my-1">{item.title}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-500 italic">{item.conference}</p>
            <a href={item.link || '#'} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 dark:text-blue-400 hover:underline mt-2 inline-block">
                {item.linkText}
            </a>
        </div>
    );
};

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  return (
    <section className="animate-fade-in">
      <div className="space-y-4">
        {publications.map((item, index) => (
          <PublicationCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Publications;
