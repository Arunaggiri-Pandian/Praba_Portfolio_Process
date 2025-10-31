import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface PasswordProtectProps {
  onAuthenticate: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const PasswordProtect: React.FC<PasswordProtectProps> = ({ onAuthenticate, isDarkMode, toggleTheme }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_PORTFOLIO_PASSWORD) {
      setError(false);
      onAuthenticate();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 space-y-6 bg-light-card dark:bg-dark-card rounded-2xl shadow-2xl"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">Private Portfolio Access</h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">This content is protected. Please enter the password to continue.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            className="relative"
            animate={error ? { x: [-5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password provided by Praba"
              className={`w-full px-4 py-3 pr-10 bg-gray-100 dark:bg-gray-700/50 border ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg text-light-text dark:text-dark-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent transition-all duration-300`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400 hover:text-light-text dark:hover:text-dark-text"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 1.274-4.057 5.064-7 9.542-7 .947 0 1.872.134 2.754.382m4.417 1.823A9.994 9.994 0 0121.542 12c-1.274 4.057-5.064-7-9.542-7a10.05 10.05 0 01-1.875-.175" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1l22 22" />
                </svg>
              )}
            </button>
            {error && <p className="mt-2 text-xs text-red-500">Incorrect password. Please try again.</p>}
          </motion.div>
          
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-light-accent dark:bg-teal-600 rounded-lg hover:bg-blue-600 dark:hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-light-accent dark:focus:ring-dark-accent transition-all duration-300 shadow-lg"
          >
            Unlock
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default PasswordProtect;
