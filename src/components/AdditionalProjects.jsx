import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const moreProjects = [
  {
    title: 'Brad Jean Photography Portfolio',
    category: 'Photography Portfolio',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop',
    behanceLink: 'https://www.behance.net/gallery/213409763/Brad-Jean-Photography-Portfolio'
  },
  {
    title: 'Patient Operations Management System',
    category: 'Healthcare Dashboard',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    behanceLink: 'https://www.behance.net/gallery/247805105/Patient-Operations-Management-System'
  },
  {
    title: 'Eventex - Smart Event Management',
    category: 'Event Management App',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    behanceLink: 'https://www.behance.net/gallery/247805893/Eventex-Smart-Event-Management-Mobile-App'
  }
];

const AdditionalProjects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { accentGradient } = useTheme();

  return (
    <section className="py-24 px-6 md:px-12 bg-black/80 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              More
            </span>
<span style={{ color: accentGradient }}>
              Creative Work
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreProjects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.behanceLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl aspect-video bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-xs text-pink-400 uppercase">{project.category}</p>
                  <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalProjects;