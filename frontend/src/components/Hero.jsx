import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const bgTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (bgTextRef.current) {
        bgTextRef.current.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.2}px))`;
        bgTextRef.current.style.opacity = Math.max(0, 1 - scrolled * 0.002);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initial reveal animation (handled via CSS in the original but needs to be triggered in React)
    const timer = setTimeout(() => {
      const heroLines = document.querySelectorAll('.hero-line-inner');
      heroLines.forEach((line, i) => {
        line.style.transform = 'translateY(100%)';
        line.style.opacity = '0';
        line.style.transition = `transform 1s ${0.3 + i * 0.15}s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ${0.3 + i * 0.15}s ease`;
        requestAnimationFrame(() => {
          line.style.transform = 'translateY(0)';
          line.style.opacity = '1';
        });
      });
    }, 2400); // Wait for loader

    return () => clearTimeout(timer);
  }, []);

  const handleMagneticMove = (e) => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMagneticLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-text" ref={bgTextRef} aria-hidden="true">DEVELOPER</div>
      <div className="hero-content">
        <div className="hero-tag reveal-up">
          <span className="tag-dot"></span>
          <span>AVAILABLE FOR OPPORTUNITIES</span>
        </div>
        <h1 className="hero-title">
          <span className="hero-line reveal-up"><span className="hero-line-inner">MEET</span></span>
          <span className="hero-line reveal-up"><span className="hero-line-inner">CHITRODA</span></span>
        </h1>
        <p className="hero-subtitle reveal-up">FULL-STACK WEB DEVELOPER</p>
        <p className="hero-description reveal-up">
          Building creative, unique, clean, functional, and visually
          engaging web applications with modern technologies.
        </p>
        <div className="hero-cta reveal-up">
          <a href="#projects" className="btn btn-primary" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}>
            <span>VIEW MY WORK</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>
          <a href="#contact" className="btn btn-outline" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}>
            <span>LET'S TALK</span>
          </a>
          <a href="/meet-chitroda-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}>
            <span>VIEW RESUME</span>
          </a>
        </div>
        <div className="hero-socials reveal-up">
          <a href="https://www.linkedin.com/in/meet-chitroda/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://github.com/Meetzyy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="mailto:themeetz65@gmail.com" className="social-link" aria-label="Email" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line"></div>
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
