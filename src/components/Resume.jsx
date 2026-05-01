import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const Resume = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const { accentGradient } = useTheme();

  return (
    <section className="py-24 px-6 md:px-12 bg-black/90 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Ready to
            </span>
<span style={{ color: accentGradient }}>
              Collaborate?
            </span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Let's bring your ideas to life with thoughtful, user-centered design.
          </p>
          <motion.a
            href="/resume.pdf" // Replace with actual resume link
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-pink-500/20 transition-all"
            style={{ background: accentGradient, color: 'white' }}
          >
            Download Resume (PDF)
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;