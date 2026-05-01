import { ThemeProvider } from './context/ThemeContext';
import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Footer from './components/Footer'
import FeaturedCaseStudies from './components/FeaturedCaseStudies'
import CaseStudyPage from './components/CaseStudyPage'
import AdditionalProjects from './components/AdditionalProjects'
import Process from './components/Process'
import Resume from './components/Resume'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle';
function App() {

  return (
      <ThemeProvider>
      <div className="bg-black">
        <ThemeToggle />
      <Hero/>
      <About/>
      <Skill/>
      <FeaturedCaseStudies/>
      <CaseStudyPage/>
      <AdditionalProjects/>
      <Process/>
      <Resume/>
      <Testimonials/>
      <Contact/>

      <Footer/>
      </div>
          </ThemeProvider>

  );
}

export default App
