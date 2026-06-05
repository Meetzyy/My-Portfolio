import React, { useEffect } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Setup intersection observer for scroll reveal animations
    const initRevealAnimations = () => {
      const revealElements = document.querySelectorAll('.reveal-up');
      
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = index * 80;
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, delay);
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(el => revealObserver.observe(el));
      
      // Skill bars
      const skillBars = document.querySelectorAll('.skill-bar-fill');
      const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const targetWidth = bar.getAttribute('data-width');
            setTimeout(() => {
              bar.style.width = targetWidth + '%';
            }, 200);
            skillObserver.unobserve(bar);
          }
        });
      }, { threshold: 0.3 });
      
      skillBars.forEach(bar => skillObserver.observe(bar));

      // Counters
      const counters = document.querySelectorAll('.counter');
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'), 10);
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
              } else {
                counter.textContent = Math.ceil(current);
              }
            }, 40);
            counterObserver.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });
      
      counters.forEach(c => counterObserver.observe(c));
    };

    // The Loader component calls onComplete when it finishes loading, 
    // which is when we want to start these intersection observers.
    // However, some elements might already be visible or we might bypass loader.
    // So we'll expose a global function for Loader to call.
    window.initAnimations = initRevealAnimations;

  }, []);

  return (
    <>
      <Loader onComplete={() => window.initAnimations && window.initAnimations()} />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
