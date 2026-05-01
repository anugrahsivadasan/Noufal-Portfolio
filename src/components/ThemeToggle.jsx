// components/ThemeToggle.js
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, accentGradient } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 group"
      whileHover={{ rotate: 180 }}
    >
      <svg 
        className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-500" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    </motion.button>
  );
};

export default ThemeToggle;