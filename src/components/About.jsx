// import { useEffect, useRef, useState } from "react";

// const collageImages = [
//   "https://images.unsplash.com/photo-1559028012-481c04fa702d",
//   "https://images.unsplash.com/photo-1545235617-9465d2a55698",
//   "https://images.unsplash.com/photo-1545235617-fcf8f6f743c4",
//   "https://images.unsplash.com/photo-1558655146-d09347e92766",
//   "https://images.unsplash.com/photo-1559028012-df6f2b65b2c1",
//   "https://images.unsplash.com/photo-1558655146-9f9f03b1c0c7",
// ];

// export default function About() {
//   const sectionRef = useRef(null);
//   const rowRef = useRef(null);
//   const [translateX, setTranslateX] = useState(0);

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       if (!rowRef.current) return;

//       const currentScrollY = window.scrollY;
//       const delta = currentScrollY - lastScrollY;
//       lastScrollY = currentScrollY;

//       const width = rowRef.current.scrollWidth / 2;

//       setTranslateX((prev) => (prev + delta * 0.6) % width);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // fade strength (no new state, derived only)
//   const fadeOpacity = Math.min(1, translateX / 300);

//   return (
//     <>
//       {/* ABOUT SECTION */}
//       <section
//         ref={sectionRef}
//         className="relative overflow-hidden bg-black px-6 md:px-20 py-40 text-white"
//       >
//         {/* BACKGROUND COLLAGE */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div
//             ref={rowRef}
//             className="flex gap-8 absolute top-1/2 -translate-y-1/2"
//             style={{
//               transform: `translateX(-${translateX}px)`,
//               opacity: 0.15 + fadeOpacity * 0.25,
//             }}
//           >
//             {[...collageImages, ...collageImages].map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt=""
//                 className="h-64 w-96 object-cover rounded-2xl grayscale"
//               />
//             ))}
//           </div>
//         </div>

//         <div className="absolute inset-0 bg-black/40" />

//         {/* CONTENT */}
//         <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
//           <div className="flex items-start gap-4 text-white/90">
//             <h2 className="text-sm tracking-widest font-semibold">
//               ME, MYSELF
//             </h2>
//             <span className="text-xl">→</span>
//           </div>

//           <div className="md:col-span-2 space-y-10 text-white/60 leading-relaxed">
//             <p>
//               My design journey started back in school not with wireframes,
//               but by renaming flights to{" "}
//               <span className="text-white">“Noufal Airlines”</span> and
//               Photoshopping celebrities watching me give interviews on TV 😄.
//               Somewhere along the way, I realized{" "}
//               <span className="text-white font-semibold">
//                 I genuinely loved designing things.
//               </span>
//             </p>

//             <p>
//               That curiosity slowly became my career. I kept sneaking design
//               into everything until it became my real role — learning that
//               UI is nothing without strong UX thinking.
//             </p>

//             <p>
//               Today, I craft thoughtful products, untangle UX problems, and
//               still have fun doing it — just with fewer world leaders involved 😅.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* SECOND SCROLL SECTION (OPPOSITE DIRECTION) */}
//       <section className="relative overflow-hidden bg-black py-28">
//         <div
//           className="flex gap-10"
//           style={{
//             transform: `translateX(${translateX}px)`,
//             opacity: 0.1 + fadeOpacity * 0.4,
//           }}
//         >
//           {[...collageImages, ...collageImages].map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt=""
//               className="h-56 w-80 object-cover rounded-2xl"
//             />
//           ))}
//         </div>

//         {/* soft gradient fade edges */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
//       </section>
//     </>
//   );
// }




// components/About.js
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const { accentGradient } = useTheme();

  return (
    <section className="relative py-24 px-6 md:px-12 bg-black overflow-hidden" id="about">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full blur-[100px]" 
             style={{ background: accentGradient }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-sm uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 inline-block mb-6"
              style={{ background: `${accentGradient}20` }}
            >
              Get to Know Me
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-white">About</span>
              <br />
              {/* Only the name has gradient, not the background */}
              <span 
                className="bg-clip-text text-transparent"
                style={{ color: accentGradient,}}
              >
                Noufal VI
              </span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4 text-gray-300 leading-relaxed"
            >
              <p>
                I'm a UI/UX Designer with 1.5 years of hands-on experience in designing user-centered mobile applications, dashboards, and websites. I specialize in creating intuitive, visually clean, and functional digital experiences that balance user needs and business goals.
              </p>
              <p>
                I enjoy solving real-world problems through design and continuously improving my skills by staying updated with modern UI/UX trends, design systems, and accessibility standards. My goal is to build products that not only look good but also feel effortless for users.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <div className="w-32 h-px" style={{ background: accentGradient }} />
              <p className="text-sm text-gray-500 mt-3 font-serif">Designing experiences that matter</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 group"
          >
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-6xl font-bold mb-3"
                style={{ color: accentGradient,}}
              >
                1.5+
              </motion.div>
              <div className="text-gray-400 uppercase tracking-wide text-sm">Years of Experience</div>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"
              />
              
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="group-hover:translate-y-[-4px] transition-transform"
                >
                  <span className="text-2xl font-bold text-white">10+</span>
                  <p className="text-xs text-gray-400 mt-1">Projects Delivered</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="group-hover:translate-y-[-4px] transition-transform"
                >
                  <span className="text-2xl font-bold text-white">100%</span>
                  <p className="text-xs text-gray-400 mt-1">Client Satisfaction</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;