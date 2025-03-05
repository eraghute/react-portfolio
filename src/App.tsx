import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import About from './components/about/About.tsx'
import Skills from './components/skills/Skills.tsx';
import Experience from './components/experience/Experience.tsx';
import Education from './components/education/Education.tsx';
import Contact from './components/contact/Contact.tsx';
import Footer from './components/footer/Footer.tsx';
import Links from './components/links/Links.tsx';

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
   <main className='bg-[#0d182e]'>
    <About /> 
    <Skills />
    <Experience />
    <Education />
    <Links />
    <Contact />
    <Footer />
   </main>
  )
}
