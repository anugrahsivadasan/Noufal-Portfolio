// context/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const gradients = {
  purple: '#a855f7',
  blue: '#3b82f6',
  orange: '#f97316',
  green: '#10b981',
  pink: '#ec4899',
  cyan: '#06b6d4',
  red: '#ef4444',
  indigo: '#6366f1',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('pink');
  const [accentGradient, setAccentGradient] = useState(gradients.pink);

  const toggleTheme = () => {
    const keys = Object.keys(gradients);
    const currentIndex = keys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % keys.length;
    const nextTheme = keys[nextIndex];
    setTheme(nextTheme);
    setAccentGradient(gradients[nextTheme]);
  };

  return (
    <ThemeContext.Provider value={{ theme, accentGradient, toggleTheme, gradients }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};