import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import { Mail, MapPin, Clock, Link } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const { accentGradient } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🚀 Demo: Your message would be sent to Noufal!');
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-black/90 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Let's
            </span>
            <span style={{ color: accentGradient }}>
              Connect
            </span>
          </h2>

          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: `linear-gradient(to right, ${accentGradient}, white)`
            }}
          />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Have a project in mind?</h3>
            <p className="text-gray-400">
              I'm currently available for freelance work or full-time opportunities. Let's create something amazing together.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail style={{ color: accentGradient }} size={18} />
                hello@noufal.design
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin style={{ color: accentGradient }} size={18} />
                India / Remote
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Clock style={{ color: accentGradient }} size={18} />
                Response within 24h
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {['Behance', 'LinkedIn', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex items-center gap-1 text-gray-400 transition text-sm"
                  onMouseEnter={(e) => (e.currentTarget.style.color = accentGradient)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                >
                  <Link size={14} />
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none transition"
              onFocus={(e) => (e.target.style.borderColor = accentGradient)}
              onBlur={(e) => (e.target.style.borderColor = '')}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none transition"
              onFocus={(e) => (e.target.style.borderColor = accentGradient)}
              onBlur={(e) => (e.target.style.borderColor = '')}
              required
            />

            <textarea
              rows="4"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none transition"
              onFocus={(e) => (e.target.style.borderColor = accentGradient)}
              onBlur={(e) => (e.target.style.borderColor = '')}
              required
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 rounded-full font-semibold text-white shadow-lg"
              style={{ background: accentGradient }}
            >
              Send Message →
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;