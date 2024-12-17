import React from 'react';
import { Brain, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between mb-8 pt-8">
      <div className="flex items-center gap-2">
        <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tritan AI</h1>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {theme === 'light' ? (
          <Moon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        ) : (
          <Sun className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        )}
      </button>
    </div>
  );
};