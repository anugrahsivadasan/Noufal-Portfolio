import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const caseStudies = [
  {
    title: 'Fitness Accessories Mobile App',
    category: 'Mobile App UI/UX',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
    behanceLink: 'https://www.behance.net/gallery/212417321/Mobile-app-for-Fitness-Accessories'
  },
  {
    title: 'Travel Agency Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop',
    behanceLink: 'https://www.behance.net/gallery/226339589/Website-for-Travel-Agency'
  },
  {
    title: 'Food Delivery App',
    category: 'Mobile App UI/UX',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
    behanceLink: 'https://www.behance.net/gallery/244525799/Food-Delivery-App'
  }
];

const FeaturedCaseStudies = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { accentGradient } = useTheme();

  return (
    <section className="py-24 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Featured 
            </span>
            <span style={{ color: accentGradient }}>
              Case Studies
            </span>
          </h2>

          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: `linear-gradient(to right, ${accentGradient}, white)`
            }}
          />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.behanceLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -12 }}
              style={{ "--accent": accentGradient }}
              className="group block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--accent)] transition-all duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <span
                  className="text-xs uppercase tracking-wider"
                  style={{ color: accentGradient }}
                >
                  {project.category}
                </span>

                <h3
                  className="text-xl font-semibold mt-2 text-white mb-3 transition"
                  style={{}}
                  onMouseEnter={(e) => (e.target.style.color = accentGradient)}
                  onMouseLeave={(e) => (e.target.style.color = "")}
                >
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition">
                  <span>View on Behance</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;