import React, { useState } from 'react';
import { Education as EducationType } from '../types';

interface EducationProps {
    education: EducationType[];
}

const EducationCard: React.FC<{ item: EducationType }> = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="mb-6 p-6 bg-light-card dark:bg-dark-card rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-light-accent/40 dark:hover:shadow-dark-accent/10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {item.logo && (
                    <div className="flex-shrink-0 w-36 h-24 flex items-center justify-center bg-white rounded-md p-2 shadow-md">
                        <img src={item.logo} alt={`${item.institution} logo`} className="max-w-full max-h-full object-contain" />
                    </div>
                )}
                <div className="flex-grow w-full">
                    <div className="flex justify-between items-start flex-wrap">
                        <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{item.institution}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{item.dates}</span>
                    </div>
                    <div className="flex justify-between items-start flex-wrap text-gray-600 dark:text-gray-400 text-sm mb-3">
                        <p>{item.degree} <span className="text-gray-500 dark:text-gray-500 font-mono">| GPA: {item.gpa}</span></p>
                        <p>{item.location}</p>
                    </div>
                    
                    {item.details.length > 0 && (() => {
                        const containsHtml = item.details.some(detail => /<[a-z][\s\S]*>/i.test(detail));
                        if (containsHtml) {
                            return (
                                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    {item.details.map((detail, index) => (
                                        <p key={index} dangerouslySetInnerHTML={{ __html: detail }} />
                                    ))}
                                </div>
                            );
                        } else {
                            return (
                                <div className="mt-4">
                                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Relevant Coursework</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.details.map((detail, index) => (
                                            <span key={index} className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                    })()}

                    {item.certificate && (
                        <div className="mt-4 flex items-center gap-3 group">
                            <img 
                                src={item.certificate} 
                                alt="Certificate Thumbnail" 
                                className="w-24 h-auto rounded-md cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                onClick={() => setIsModalOpen(true)}
                                title="Click to view certificate"
                            />
                            <div>
                                <p className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                    <span>Degree Certificate</span>
                                    <div className="group relative flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="absolute left-5 w-max rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-gray-700">
                                            Click the image to view full certificate
                                        </span>
                                    </div>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {isModalOpen && item.certificate && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div 
                        className="relative bg-white p-4 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={item.certificate} alt="Degree Certificate" className="w-full h-full object-contain" />
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
                            aria-label="Close certificate view"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="animate-fade-in">
      <div>
        {education.map((item, index) => (
          <EducationCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Education;
