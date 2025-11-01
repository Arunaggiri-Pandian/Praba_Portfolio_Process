import React from 'react';
import Slider from 'react-slick';
import { Hobby } from '../types';

interface HobbiesProps {
    hobbies: Hobby[];
}

const HobbyCard: React.FC<{ icon: string; title: string }> = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center p-6 group">
    <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-light-accent/40 dark:group-hover:shadow-dark-accent/10 group-hover:-translate-y-1">
      <img 
        src={icon} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
      />
    </div>
    <div className="mt-4 text-center">
      <p className="text-sm font-medium text-light-text dark:text-dark-text">{title}</p>
    </div>
  </div>
);

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
    const carouselSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Outside the Circuit</h2>
            <Slider {...carouselSettings}>
                {hobbies.map((hobby, index) => (
                    <div key={hobby.title}>
                        <div className="flex items-center h-full">
                            <div className="flex-shrink-0">
                                <HobbyCard icon={hobby.icon} title={hobby.title} />
                            </div>
                            {index < hobbies.length - 1 && (
                                <div className="flex-1 flex flex-col items-center justify-center h-32 px-2">
                                    <p className="text-xs italic text-gray-500 dark:text-gray-400 pb-1">
                                        {hobby.mindset}
                                    </p>
                                    <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700"></div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Hobbies;
