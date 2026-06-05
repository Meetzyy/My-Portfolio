import React from 'react';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-number">01</span>
          <h2 className="section-title">ABOUT</h2>
        </div>

        <div className="bento-grid bento-about">
          <div className="bento-card bento-card-lg reveal-up">
            <div className="bento-card-content">
              <h3 className="bento-heading">WHO I AM</h3>
              <p className="bento-text">
                I'm an Integrated M.Sc. IT student with a strong foundation in frontend development
                and an ongoing focus on full-stack MERN technologies. I'm passionate about building 
                creative, unique, clean, functional, and visually engaging web applications.
              </p>
              <p className="bento-text">
                Currently seeking a full-stack development internship to gain practical industry 
                exposure, strengthen backend skills, and contribute to real-world projects.
              </p>
            </div>
          </div>

          <div className="bento-card bento-card-sm reveal-up">
            <div className="bento-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span className="bento-label">BASED IN</span>
            <h3 className="bento-value" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', wordBreak: 'break-word' }}>AHMEDABAD</h3>
            <span className="bento-sublabel">GUJARAT, INDIA</span>
          </div>

          <div className="bento-card bento-card-sm reveal-up">
            <div className="bento-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <span className="bento-label">PROJECTS BUILT</span>
            <h3 className="bento-value"><span className="counter" data-target="25">0</span>+</h3>
            <span className="bento-sublabel">& COUNTING</span>
          </div>

          <div className="bento-card bento-card-md reveal-up">
            <div className="bento-card-content">
              <h3 className="bento-heading">MY APPROACH</h3>
              <p className="bento-text">
                I believe in bridging the gap between creative frontend design and core backend 
                programming. Every line of code I write is driven by the goal of creating 
                experiences that are both beautiful and performant.
              </p>
            </div>
            <div className="bento-card-accent"></div>
          </div>

          <div className="bento-card bento-card-md reveal-up">
            <div className="bento-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <span className="bento-label">LANGUAGES</span>
            <div className="lang-list">
              <span className="lang-item">Gujarati <em>Native</em></span>
              <span className="lang-item">Hindi <em>Fluent</em></span>
              <span className="lang-item">English <em>Professional</em></span>
            </div>
          </div>

          <div className="bento-card bento-card-md reveal-up">
            <div className="bento-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            </div>
            <span className="bento-label">BEYOND CODE</span>
            <div className="hobby-tags">
              <span className="hobby-tag">Music Production</span>
              <span className="hobby-tag">Story Writing</span>
              <span className="hobby-tag">Content Creation</span>
              <span className="hobby-tag">Artistry</span>
              <span className="hobby-tag">Video Editing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
