import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const caseStudyData = {
  'fitness-app': {
    title: 'Fitness Accessories Mobile App',
    category: 'Mobile App Design',
    challenge: 'Design a seamless shopping and workout tracking experience for fitness enthusiasts who want to purchase quality fitness accessories while tracking their progress.',
    solution: 'A comprehensive mobile app combining an intuitive e-commerce platform with personalized workout plans, progress tracking, and community features.',
    result: 'Increased user engagement by 45% and reduced bounce rate by 30% through streamlined checkout and motivational workout features.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=800',
    ],
    duration: '4 weeks',
    role: 'Lead UI/UX Designer',
    tools: ['Figma', 'Adobe XD', 'Prototyping'],
    deliverables: ['User Flow', 'Wireframes', 'High-fidelity Mockups', 'Interactive Prototype']
  },
  'travel-agency': {
    title: 'Travel Agency Website',
    category: 'Web Design',
    challenge: 'Create an immersive booking experience that inspires wanderlust while simplifying complex travel arrangements.',
    solution: 'A visually rich website with smart search filters, personalized recommendations, and seamless booking integration.',
    result: '40% increase in booking completion rate and 25% higher time spent on site.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
    images: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    ],
    duration: '3 weeks',
    role: 'UI/UX Designer',
    tools: ['Figma', 'Adobe Illustrator', 'Prototyping'],
    deliverables: ['Research', 'Wireframes', 'UI Design', 'Interactive Demo']
  },
  'food-delivery': {
    title: 'Food Delivery App',
    category: 'Mobile App Design',
    challenge: 'Design an app that makes food ordering quick, delightful, and personalized for busy urban professionals.',
    solution: 'A sleek mobile app with smart reordering, real-time tracking, and personalized restaurant recommendations.',
    result: 'Reduced average order time by 60% and increased repeat orders by 50%.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200',
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800',
    ],
    duration: '3 weeks',
    role: 'Lead Designer',
    tools: ['Figma', 'Adobe XD'],
    deliverables: ['User Research', 'Prototype', 'UI Kit']
  },
  'photography-portfolio': {
    title: 'Brad Jean Photography Portfolio',
    category: 'Portfolio Website',
    challenge: 'Create a stunning portfolio that showcases photography work while maintaining fast load times and intuitive navigation.',
    solution: 'A minimalist, image-first website with smooth galleries and behind-the-scenes content.',
    result: 'Increased client inquiries by 70% and average session duration by 3 minutes.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200',
    images: [
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800',
      'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800',
    ],
    duration: '2 weeks',
    role: 'UI/UX Designer',
    tools: ['Figma', 'Adobe Photoshop'],
    deliverables: ['UI Design', 'Prototype', 'Style Guide']
  },
  'pms-system': {
    title: 'Patient Operations Management System',
    category: 'Dashboard Design',
    challenge: 'Design a comprehensive dashboard for hospital staff to manage patient operations efficiently.',
    solution: 'An intuitive admin dashboard with real-time data visualization, patient tracking, and task management.',
    result: 'Reduced administrative work by 35% and improved patient wait times by 25%.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    ],
    duration: '5 weeks',
    role: 'Lead UX Designer',
    tools: ['Figma', 'Adobe XD'],
    deliverables: ['User Flows', 'Wireframes', 'High-fidelity Design']
  },
  'event-management': {
    title: 'Eventex Smart Event Management App',
    category: 'Mobile App Design',
    challenge: 'Create a comprehensive event management solution for organizers and attendees.',
    solution: 'A feature-rich app with ticketing, scheduling, networking, and real-time updates.',
    result: 'Booked over 10,000 tickets in first month with 4.8/5 user rating.',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200',
    images: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800',
    ],
    duration: '4 weeks',
    role: 'UI/UX Designer',
    tools: ['Figma', 'Prototyping'],
    deliverables: ['UX Strategy', 'UI Design', 'Interactive Prototype']
  }
};

const CaseStudyPage = () => {
  const { slug } = useParams();
  const project = caseStudyData[slug] || caseStudyData['fitness-app'];
  const { accentGradient, theme, toggleTheme } = useTheme();

  return (
    <div className="bg-black min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.history.back()}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Work
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 inline-block mb-4" 
                style={{ color: `${accentGradient.split(',')[0].slice(9, -1)}20`, borderColor: `${accentGradient.split(',')[0].slice(9, -1)}40` }}>
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" 
              style={{ color: accentGradient }}>
            {project.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300 border-t border-b border-white/10 py-6">
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-semibold">{project.duration}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">My Role</p>
              <p className="font-semibold">{project.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Tools Used</p>
              <div className="flex gap-2 flex-wrap">
                {project.tools.map((tool, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden mb-12"
        >
          <img src={project.image} alt={project.title} className="w-full h-auto" />
        </motion.div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Design Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Research', 'Ideation', 'Design', 'Prototype'].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                     style={{ color: `${accentGradient.split(',')[0].slice(9, -1)}20` }}>
                  <span className="text-2xl font-bold" style={{ color: accentGradient}}>
                    {i + 1}
                  </span>
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Key Deliverables</h2>
          <div className="flex flex-wrap gap-3">
            {project.deliverables.map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:scale-105 transition-transform">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-white/10 to-transparent rounded-2xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">The Result</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.result}</p>
        </motion.div>

        {/* More Images */}
        <div className="grid md:grid-cols-2 gap-6">
          {project.images.map((img, i) => (
            <motion.img
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              className="rounded-xl hover:scale-105 transition-transform duration-500"
            />
          ))}
        </div>

        {/* Next/Prev Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-between gap-4 mt-16 pt-8 border-t border-white/10"
        >
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous Project
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            Next Project
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyPage;