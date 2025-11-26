import React, { useState, useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { funFactsData } from '../funFactsData';

const FunFact: React.FC = () => {
  const [fact, setFact] = useState<string | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const getNewFact = useCallback(() => {
    let newFact;
    do {
      newFact = funFactsData[Math.floor(Math.random() * funFactsData.length)];
    } while (newFact === fact);
    return newFact;
  }, [fact]);

  const handleShowFact = () => {
    setFact(getNewFact());
    setAnimationKey(prevKey => prevKey + 1);
  };

  return (
    <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">A Fun Fact for the Curious Mind!</h3>
        <div className="text-lg text-slate-600 dark:text-slate-400 font-mono h-24 md:h-16 flex items-center justify-center">
            {fact ? (
                <TypeAnimation
                    key={animationKey}
                    sequence={[fact]}
                    wrapper="span"
                    speed={50}
                    repeat={0}
                />
            ) : (
                <p className="text-slate-500">Click the button to see a random fun fact!</p>
            )}
        </div>
        <div className="mt-4 flex justify-center gap-4">
            <button
                onClick={handleShowFact}
                className="px-4 py-2 text-sm font-semibold text-white bg-light-accent dark:bg-dark-accent rounded-lg hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-colors"
            >
                {fact ? 'Show Me Another!' : 'Show Me a Fun Fact!'}
            </button>
        </div>
    </div>
  );
};

export default FunFact;
