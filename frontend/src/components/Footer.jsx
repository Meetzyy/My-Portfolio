import React from 'react';

const Footer = () => {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-name">MEET CHITRODA</span>
          <span className="footer-copy">&copy; {new Date().getFullYear()} — All rights reserved.</span>
        </div>
        <div className="footer-right">
          <a href="#hero" onClick={handleScrollTop} className="back-to-top" aria-label="Back to top" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
