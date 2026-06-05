import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active link
      const sections = document.querySelectorAll('.section, .hero');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="nav">
        <a href="#hero" onClick={(e) => handleSmoothScroll(e, '#hero')} className="nav-logo">MC</a>
        <div className="nav-links">
          <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="nav-link" style={{ color: activeSection === 'about' ? '#f5f5f5' : '' }}>ABOUT</a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')} className="nav-link" style={{ color: activeSection === 'skills' ? '#f5f5f5' : '' }}>SKILLS</a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="nav-link" style={{ color: activeSection === 'projects' ? '#f5f5f5' : '' }}>WORK</a>
          <a href="#education" onClick={(e) => handleSmoothScroll(e, '#education')} className="nav-link" style={{ color: activeSection === 'education' ? '#f5f5f5' : '' }}>EDUCATION</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="nav-link" style={{ color: activeSection === 'contact' ? '#f5f5f5' : '' }}>CONTACT</a>
        </div>
        <button className={`nav-menu-btn ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="mobile-link">ABOUT</a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')} className="mobile-link">SKILLS</a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="mobile-link">WORK</a>
          <a href="#education" onClick={(e) => handleSmoothScroll(e, '#education')} className="mobile-link">EDUCATION</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="mobile-link">CONTACT</a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
