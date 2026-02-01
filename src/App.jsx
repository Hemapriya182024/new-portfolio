import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
