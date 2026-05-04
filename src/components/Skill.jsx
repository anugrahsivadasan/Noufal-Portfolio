import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { Palette, Sparkles, Search, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: 'Design & Prototyping',
    skills: ['Figma ⭐⭐⭐⭐⭐', 'Adobe XD', 'Prototyping Tools', 'Design Systems'],
    icon: <Palette />
  },
  {
    title: 'Visual Design',
    skills: ['Adobe Illustrator', 'Adobe Photoshop', 'High-Fidelity UI', 'Visual Hierarchy'],
    icon: <Sparkles />
  },
  {
    title: 'UX & Research',
    skills: ['User Flows', 'Wireframing', 'User Research', 'Usability Testing'],
    icon: <Search />
  },
  {
    title: 'Platforms',
    skills: ['Mobile Apps (iOS/Android)', 'Web Applications', 'Admin Dashboards', 'Responsive Design'],
    icon: <Smartphone />
  }
];

const Skill = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { accentGradient } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-black/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              My
            </span>
            <span style={{ color: accentGradient }}>
              Toolkit
            </span>
          </h2>

          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: `linear-gradient(to right, ${accentGradient}, white)`
            }}
          />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              style={{ "--accent": accentGradient }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 
                         group transition-all duration-300 
                         hover:border-[var(--accent)]"
            >
              <div
                className="text-4xl mb-4"
                style={{ color: accentGradient }}
              >
                {category.icon}
              </div>

              <div
                className="group"
                style={{ "--accent": accentGradient }}
              >
                <h3 className="text-xl text-white font-semibold mb-4 transition group-hover:text-[var(--accent)]">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2 text-gray-400 text-sm">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: accentGradient }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;