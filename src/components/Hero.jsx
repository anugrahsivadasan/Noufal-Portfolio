// import { useEffect, useRef } from "react";
// import figma from "../assets/FigmaIcon.svg";
// import xdIcon from "../assets/Illustrator-icon.svg.png";
// import uxIcon from "../assets/Photoshop-icon.svg.png";
// import adobe from "../assets/Adobe-icon.svg.png";
// import canva from "../assets/Canva.svg";

// const skills = [
//   { label: "Branding", color: "bg-pink-500", x: -250, y: 20 },
//   { label: "UX Design", color: "bg-orange-500", x: -10, y: 90 },
//   { label: "UI Design", color: "bg-emerald-400", x: 420, y: 60 },
//   { label: "Visual Design", color: "bg-lime-400", x: 290, y: -10 },
//   { label: "Senior Visual Designer", color: "bg-indigo-500", x: 10, y: -90 },
// ];

// const mediaItems = [
//   { src: figma, x: -433, y: -25, size: "w-20 h-20" },
// ];

// const backgroundIcons = [
//   { src: canva, x: -550, y: -450, size: "w-16 h-16", speed: 1 },
//   { src: figma, x: -300, y: -200, size: "w-16 h-16", speed: 1 },
//   { src: xdIcon, x: 400, y: -350, size: "w-12 h-12", speed: 1.5 },
//   { src: uxIcon, x: 200, y: 250, size: "w-20 h-20", speed: 0.5 },
//   { src: adobe, x: -500, y: 150, size: "w-20 h-20", speed: 0.3 },
// ];

// const backgroundText = [
//   { label: "Branding", color: "bg-pink-500", x: -250, y: 20, speed: 0.3 },
//   { label: "UX Design", color: "bg-orange-500", x: -100, y: 200, speed: 0.4 },
//   { label: "UI Design", color: "bg-emerald-400", x: 620, y: -300, speed: 0.2 },
//   { label: "Visual Design", color: "bg-lime-400", x: 490, y: -200, speed: 0.5 },
//   { label: "Senior Visual Designer", color: "bg-indigo-500", x: 240, y: -300, speed: 0.35 },
// ];

// export default function Hero() {
//   const heroRef = useRef(null);
//   const sectionRef = useRef(null);
//   const bgIconRefs = useRef([]);
//   const bgTextRefs = useRef([]);

//   // 🖱️ Mouse Parallax
//   useEffect(() => {
//     const hero = heroRef.current;

//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 30;
//       const y = (e.clientY / window.innerHeight - 0.5) * 30;
//       hero.style.transform = `translate(${x}px, ${y}px)`;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // 🌀 Scroll Fade & Parallax
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const height = window.innerHeight;
//       const progress = Math.min(scrollY / height, 1);

//       sectionRef.current.style.opacity = `${1 - progress}`;
//       sectionRef.current.style.transform = `scale(${1 - progress * 0.38})`;

//       bgIconRefs.current.forEach((el, i) => {
//         if (el) {
//           el.style.transform = `translate(${backgroundIcons[i].x}px, ${
//             backgroundIcons[i].y + scrollY * backgroundIcons[i].speed
//           }px)`;
//         }
//       });

//       bgTextRefs.current.forEach((el, i) => {
//         if (el) {
//           el.style.transform = `translate(${backgroundText[i].x}px, ${
//             backgroundText[i].y + scrollY * backgroundText[i].speed
//           }px)`;
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
//     >
//       {/* BACKGROUND ICONS */}
//       {backgroundIcons.map((icon, i) => (
//         <div
//           key={i}
//           ref={(el) => (bgIconRefs.current[i] = el)}
//           className={`absolute left-1/2 top-1/2 ${icon.size} opacity-25 animate-float-soft`}
//           style={{
//             "--x": `${icon.x}px`,
//             "--y": `${icon.y}px`,
//             animationDelay: `${i * 0.6}s`,
//           }}
//         >
//           <img src={icon.src} alt="" className="w-full h-full object-contain" />
//         </div>
//       ))}

//       <div ref={heroRef} className="relative">
//         <h1 className="text-center font-extrabold tracking-tight text-[22vw] sm:text-[18vw] md:text-[14vw] bg-gradient-to-b from-white via-gray-200 to-white bg-clip-text text-transparent select-none">
//           NOUFAL VI
//         </h1>

//         {/* SKILLS */}
//         {skills.map((skill, i) => (
//           <span
//             key={i}
//             className={`absolute left-1/2 top-1/2 ${skill.color} px-4 py-1.5 rounded-full font-semibold text-xs sm:text-sm shadow-xl animate-float-soft`}
//             style={{
//               "--x": `${skill.x}px`,
//               "--y": `${skill.y}px`,
//               animationDelay: `${i * 0.4}s`,
//             }}
//           >
//             {skill.label}
//           </span>
//         ))}

//         {/* MEDIA ICONS */}
//         {mediaItems.map((item, i) => (
//           <div
//             key={i}
//             className={`absolute left-1/2 top-1/2 ${item.size} rounded-xl shadow-2xl animate-float-soft`}
//             style={{
//               "--x": `${item.x}px`,
//               "--y": `${item.y}px`,
//               animationDelay: "0.2s",
//             }}
//           >
//             <img src={item.src} alt="" className="w-full h-full object-cover" />
//           </div>
//         ))}

//         {/* BACKGROUND TEXT */}
//         {backgroundText.map((item, i) => (
//           <span
//             key={i}
//             ref={(el) => (bgTextRefs.current[i] = el)}
//             className={`absolute left-1/2 top-1/2 ${item.color} rounded-full opacity-25 px-4 py-1 text-xs animate-float-soft`}
//             style={{
//               "--x": `${item.x}px`,
//               "--y": `${item.y}px`,
//               animationDelay: `${i * 0.5}s`,
//             }}
//           >
//             {item.label}
//           </span>
//         ))}
//       </div>

//       <div className="absolute bottom-10 text-xs text-white/70 border border-white/20 px-5 py-2 rounded-full backdrop-blur">
//         FEATURED ON <span className="font-semibold">WALL OF PORTFOLIOS</span>
//       </div>
//     </section>
//   );
// }



// components/Hero.js - Fixed version
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from '../context/ThemeContext';
import figma from "../assets/FigmaIcon.svg";
import xdIcon from "../assets/Illustrator-icon.svg.png";
import uxIcon from "../assets/Photoshop-icon.svg.png";
import adobe from "../assets/Adobe-icon.svg.png";
import canva from "../assets/Canva.svg";

const skills = [
  { label: "Branding", color: "bg-pink-500", x: -250, y: 20 },
  { label: "UX Design", color: "bg-orange-500", x: -10, y: 90 },
  { label: "UI Design", color: "bg-emerald-400", x: 420, y: 60 },
  { label: "Visual Design", color: "bg-lime-400", x: 290, y: -10 },
  { label: "Senior Visual Designer", color: "bg-indigo-500", x: 10, y: -90 },
];

const mediaItems = [
  { src: figma, x: -433, y: -25, size: "w-20 h-20" },
];


const backgroundIcons = [
  { src: canva, x: -550, y: -450, size: "w-16 h-16", speed: 1 },
  { src: figma, x: -300, y: -200, size: "w-16 h-16", speed: 1 },
  { src: xdIcon, x: 400, y: -350, size: "w-12 h-12", speed: 1.5 },
  { src: uxIcon, x: 200, y: 250, size: "w-20 h-20", speed: 0.5 },
  { src: adobe, x: -500, y: 150, size: "w-20 h-20", speed: 0.3 },
];

const backgroundText = [
  { label: "Branding", color: "bg-pink-500", x: -250, y: 20, speed: 0.3 },
  { label: "UX Design", color: "bg-orange-500", x: -100, y: 200, speed: 0.4 },
  { label: "UI Design", color: "bg-emerald-400", x: 620, y: -300, speed: 0.2 },
  { label: "Visual Design", color: "bg-lime-400", x: 490, y: -200, speed: 0.5 },
  { label: "Senior Visual Designer", color: "bg-indigo-500", x: 240, y: -300, speed: 0.35 },
];

export default function Hero() {
  const heroRef = useRef(null);
  const sectionRef = useRef(null);
  const bgIconRefs = useRef([]);
  const bgTextRefs = useRef([]);
  const { accentGradient } = useTheme();

  useEffect(() => {
    const hero = heroRef.current;
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      hero.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const progress = Math.min(scrollY / height, 1);
      sectionRef.current.style.opacity = `${1 - progress}`;
      sectionRef.current.style.transform = `scale(${1 - progress * 0.38})`;
      bgIconRefs.current.forEach((el, i) => {
        if (el) {
          el.style.transform = `translate(${backgroundIcons[i].x}px, ${backgroundIcons[i].y + scrollY * backgroundIcons[i].speed}px)`;
        }
      });
      bgTextRefs.current.forEach((el, i) => {
        if (el) {
          el.style.transform = `translate(${backgroundText[i].x}px, ${backgroundText[i].y + scrollY * backgroundText[i].speed}px)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {backgroundIcons.map((icon, i) => (
        <div key={i} ref={(el) => (bgIconRefs.current[i] = el)} className={`absolute left-1/2 top-1/2 ${icon.size} opacity-25 animate-float-soft`}
          style={{ "--x": `${icon.x}px`, "--y": `${icon.y}px`, animationDelay: `${i * 0.6}s` }}>
          <img src={icon.src} alt="" className="w-full h-full object-contain" />
        </div>
      ))}

      <div ref={heroRef} className="relative">
        {/* Name with gradient text only - no background */}
        <h1 className="text-center font-extrabold tracking-tight text-[22vw] sm:text-[18vw] md:text-[14vw] select-none">
<span style={{ color: accentGradient }}>
            NOUFAL VI
          </span>
        </h1>

        {skills.map((skill, i) => (
          <span key={i} className={`absolute left-1/2 top-1/2 ${skill.color} px-4 py-1.5 rounded-full font-semibold text-xs sm:text-sm shadow-xl animate-float-soft`}
            style={{ "--x": `${skill.x}px`, "--y": `${skill.y}px`, animationDelay: `${i * 0.4}s` }}>
            {skill.label}
          </span>
        ))}

        {mediaItems.map((item, i) => (
          <div key={i} className={`absolute left-1/2 top-1/2 ${item.size} rounded-xl shadow-2xl animate-float-soft`}
            style={{ "--x": `${item.x}px`, "--y": `${item.y}px`, animationDelay: "0.2s" }}>
            <img src={item.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}

        {backgroundText.map((item, i) => (
          <span key={i} ref={(el) => (bgTextRefs.current[i] = el)} className={`absolute left-1/2 top-1/2 ${item.color} rounded-full opacity-25 px-4 py-1 text-xs animate-float-soft`}
            style={{ "--x": `${item.x}px`, "--y": `${item.y}px`, animationDelay: `${i * 0.5}s` }}>
            {item.label}
          </span>
        ))}
      </div>

      <div className="absolute bottom-10 text-xs text-white/70 border border-white/20 px-5 py-2 rounded-full backdrop-blur">
        FEATURED ON <span className="font-semibold">WALL OF PORTFOLIOS</span>
      </div>
    </section>
  );
}