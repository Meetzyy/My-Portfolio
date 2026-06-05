import React from 'react';

const Skills = () => {
  return (
    <section className="section section-dark" id="skills">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-number">02</span>
          <h2 className="section-title">SKILLS</h2>
        </div>

        <div className="bento-grid bento-skills">
          <div className="bento-card bento-card-md reveal-up">
            <span className="skill-category-label">FRONTEND</span>
            <div className="skill-items">
              <div className="skill-item">
                <span className="skill-name">HTML5</span>
                <div className="skill-bar"><div className="skill-bar-fill" data-width="95"></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">CSS3</span>
                <div className="skill-bar"><div className="skill-bar-fill" data-width="90"></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript (ES6+)</span>
                <div className="skill-bar"><div className="skill-bar-fill" data-width="85"></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">React</span>
                <div className="skill-bar"><div className="skill-bar-fill" data-width="80"></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Bootstrap</span>
                <div className="skill-bar"><div className="skill-bar-fill" data-width="85"></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">jQuery</span>
                <div className="skill-bar"><div className="skill-bar-fill" data-width="75"></div></div>
              </div>
            </div>
          </div>

          <div className="bento-card bento-card-md reveal-up">
            <span className="skill-category-label">BACKEND</span>
            <div className="skill-items">
              <div className="skill-item">
                <span className="skill-name">Node.js</span>
                <div className="skill-bar"><div className="skill-bar-fill" data-width="70"></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Express.js</span>
                <div className="skill-bar"><div className="skill-bar-fill" data-width="70"></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">MongoDB</span>
                <div className="skill-bar"><div className="skill-bar-fill" data-width="65"></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">REST APIs</span>
                <div className="skill-bar"><div className="skill-bar-fill" data-width="75"></div></div>
              </div>
            </div>
          </div>

          <div className="bento-card bento-card-sm reveal-up">
            <span className="skill-category-label">PROGRAMMING</span>
            <div className="skill-tags">
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>

          <div className="bento-card bento-card-sm reveal-up">
            <span className="skill-category-label">TOOLS & WORKFLOW</span>
            <div className="skill-tags">
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">NPM</span>
              <span className="skill-tag">Chrome DevTools</span>
            </div>
          </div>

          <div className="bento-card bento-card-full reveal-up">
            <div className="marquee">
              <div className="marquee-track">
                <span className="marquee-item">HTML5</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">CSS3</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">JAVASCRIPT</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">REACT</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">NODE.JS</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">EXPRESS</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">MONGODB</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">GIT</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">HTML5</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">CSS3</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">JAVASCRIPT</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">REACT</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">NODE.JS</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">EXPRESS</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">MONGODB</span>
                <span className="marquee-sep">✦</span>
                <span className="marquee-item">GIT</span>
                <span className="marquee-sep">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
