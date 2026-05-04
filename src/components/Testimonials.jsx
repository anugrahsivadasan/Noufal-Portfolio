import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager, TechStart',
    text: 'Noufal has an incredible eye for detail and user psychology. He transformed our cluttered dashboard into an intuitive platform our users love.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, FitLife',
    text: 'Working with Noufal on the fitness app was a game-changer. His prototypes were so clear that development was seamless.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Priya Sharma',
    role: 'Creative Director, Wanderlust Travel',
    text: 'Noufal brought fresh perspectives to our travel website. The user flows he designed increased our booking conversion by 35%!',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
  }
];

const Testimonials = () => {
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
              Client
            </span>
            <span style={{ color: accentGradient }}>
              Love
            </span>
          </h2>

          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: `linear-gradient(to right, ${accentGradient}, white)`
            }}
          />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              style={{ "--accent": accentGradient }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative group hover:border-[var(--accent)] transition-all"
            >
              <div
                className="absolute -top-4 left-6 text-6xl transition"
                style={{ color: accentGradient + '33' }}
                onMouseEnter={(e) => (e.target.style.color = accentGradient + '66')}
                onMouseLeave={(e) => (e.target.style.color = accentGradient + '33')}
              >
                “
              </div>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2"
                  style={{ borderColor: accentGradient + '80' }}
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed italic">
                {testimonial.text}
              </p>

              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;