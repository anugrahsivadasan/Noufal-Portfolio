import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { accentGradient } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div>© {currentYear} Noufal VI — UI/UX Designer</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-pink-400 transition">Behance</a>
          <a href="#" className="hover:text-pink-400 transition">LinkedIn</a>
          <a href="#" className="hover:text-pink-400 transition">Dribbble</a>
        </div>
        <div>✨ Designed & built with ❤️</div>
      </div>
    </footer>
  );
};

export default Footer;