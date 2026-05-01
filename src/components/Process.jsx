import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const steps = [
  { number: '01', title: 'Discover', description: 'Research, user interviews, and competitive analysis to understand the problem space.', icon: '🔍' },
  { number: '02', title: 'Define', description: 'Synthesize findings into user personas, user journeys, and problem statements.', icon: '📌' },
  { number: '03', title: 'Ideate', description: 'Sketching, wireframing, and low-fidelity prototypes to explore solutions.', icon: '💡' },
  { number: '04', title: 'Design', description: 'High-fidelity UI, design systems, and interactive prototypes.', icon: '🎨' },
  { number: '05', title: 'Test & Iterate', description: 'Usability testing, gather feedback, and refine the design.', icon: '🔄' },
  { number: '06', title: 'Launch', description: 'Handoff to development, design QA, and monitor post-launch.', icon: '🚀' }
];

const Process = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
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
              My Design
            </span>
<span style={{ color: accentGradient }}>
              Process
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group hover:border-pink-500/50 transition-all"
            >
              <div className="text-5xl font-black text-white/10 absolute top-4 right-4 group-hover:text-pink-500/20 transition">{step.number}</div>
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-400 transition">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
              <div className="mt-4 h-0.5 w-12 bg-pink-500/50 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;