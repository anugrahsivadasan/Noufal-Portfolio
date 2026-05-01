// import React from "react";
// import { MdDesignServices } from "react-icons/md";
// import { FaUser, FaPalette, FaFigma } from "react-icons/fa";
// import { SiAdobexd, SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";

// const skills = [
//   { name: "Design Systems", description: "Comprehensive frameworks that I create to streamline & standardize the design process.", icon: <MdDesignServices size={50} className="text-indigo-400" /> },
//   { name: "User Research", description: "Understanding user needs and behaviours to inform and improve design decisions.", icon: <FaUser size={50} className="text-green-400" /> },
//   { name: "Visual Design", description: "Crafting engaging interfaces that enhance user experience and product growth.", icon: <FaPalette size={50} className="text-pink-400" /> },
//   { name: "Figma", description: "Creating UI/UX designs with Figma for web and mobile apps.", icon: <FaFigma size={50} className="text-cyan-400" /> },
//   { name: "Adobe XD", description: "Designing interactive prototypes and wireframes using Adobe XD.", icon: <SiAdobexd size={50} className="text-purple-400" /> },
//   { name: "Illustrator", description: "Crafting vector illustrations and graphics using Adobe Illustrator.", icon: <SiAdobeillustrator size={50} className="text-orange-400" /> },
//   { name: "Photoshop", description: "Editing images and creating visuals using Adobe Photoshop.", icon: <SiAdobephotoshop size={50} className="text-blue-400" /> },
// ];

// // Duplicate skills to make infinite scroll seamless
// const infiniteSkills = [...skills, ...skills];

// export default function Skills() {
//   return (
//     <section className="relative bg-black text-white py-20 px-5">
//       <div className="text-center mb-12">
//         <p className="text-sm text-gray-500 tracking-widest mb-2">✦ SKILLS ✦</p>
//         <h2 className="text-3xl md:text-5xl font-semibold">Things I'm good at</h2>
//       </div>

//       {/* Auto scroll container */}
//       <div className="overflow-hidden">
//         <div className="flex gap-10 md:gap-20 min-w-max px-5 animate-scroll hover:pause-scroll">
//           {infiniteSkills.map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center gap-4 bg-white/10 backdrop-blur-lg border border-white/30 p-6 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_12px_48px_0_rgba(31,38,135,0.5)] transition-all duration-500 relative"
//             >
//               {/* Shiny overlay */}
//               <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-tr from-white/20 via-white/10 to-white/5 opacity-40 pointer-events-none"></div>

//               <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl flex justify-center items-center shadow-inner relative">
//                 {skill.icon}
//                 {/* Icon shine effect */}
//                 <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-tr from-white/30 via-white/10 to-white/5 opacity-30 pointer-events-none"></div>
//               </div>
//               <h3 className="text-xl font-semibold">{skill.name}</h3>
//               <p className="text-gray-300 text-sm">{skill.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Tailwind custom animation */}
//       <style>
//         {`
//           @keyframes scroll {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-scroll {
//             display: flex;
//             animation: scroll 20s linear infinite;
//           }
//           .hover\\:pause-scroll:hover {
//             animation-play-state: paused;
//           }
//         `}
//       </style>
//     </section>
//   );
// }





import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const skillCategories = [
  {
    title: 'Design & Prototyping',
    skills: ['Figma ⭐⭐⭐⭐⭐', 'Adobe XD', 'Prototyping Tools', 'Design Systems'],
    icon: '🎨'
  },
  {
    title: 'Visual Design',
    skills: ['Adobe Illustrator', 'Adobe Photoshop', 'High-Fidelity UI', 'Visual Hierarchy'],
    icon: '✨'
  },
  {
    title: 'UX & Research',
    skills: ['User Flows', 'Wireframing', 'User Research', 'Usability Testing'],
    icon: '🔍'
  },
  {
    title: 'Platforms',
    skills: ['Mobile Apps (iOS/Android)', 'Web Applications', 'Admin Dashboards', 'Responsive Design'],
    icon: '📱'
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
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
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
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-pink-500/50 group transition-all duration-300"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-pink-400 transition">{category.title}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
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