import React from 'react';

const Education = () => {
  return (
    <section className="section section-dark" id="education">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-number">04</span>
          <h2 className="section-title">EDUCATION</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item reveal-up">
            <div className="timeline-marker"></div>
            <div className="timeline-date">JUN 2022 — JUN 2026</div>
            <div className="timeline-content">
              <h3 className="timeline-title">INTEGRATED M.SC. IN INFORMATION TECHNOLOGY</h3>
              <p className="timeline-institution">Silver Oak College of Computer Applications, Silver Oak University</p>
              <p className="timeline-description">
                Earned a dual Bachelor's and Master's credential specializing in modern web design
                paradigms, script programming, and system deployment. Achieved a perfect 10.00 SPI 
                in advanced development tracks. Currently in final (8th) semester.
              </p>
              <span className="timeline-badge">ONGOING</span>
            </div>
          </div>

          <div className="timeline-item reveal-up">
            <div className="timeline-marker"></div>
            <div className="timeline-date">MAY 2025 — DEC 2026</div>
            <div className="timeline-content">
              <h3 className="timeline-title">FULL-STACK WEB DEVELOPMENT COURSE</h3>
              <p className="timeline-institution">Red & White Skill Education</p>
              <p className="timeline-description">
                Intensive full-stack specialization emphasizing practical web engineering. 
                Proficient in delivering complete web applications leveraging HTML, CSS, 
                JavaScript, React, Node.js, and MongoDB.
              </p>
              <span className="timeline-badge">ONGOING</span>
            </div>
          </div>

          <div className="timeline-item reveal-up">
            <div className="timeline-marker"></div>
            <div className="timeline-date">2021 — 2022</div>
            <div className="timeline-content">
              <h3 className="timeline-title">BACHELOR OF COMMERCE (FIRST YEAR)</h3>
              <p className="timeline-institution">Aroma College of Commerce, Gujarat University</p>
              <p className="timeline-description">
                Completed foundational first year of commerce with 90%+ academic score before 
                strategically pivoting to Information Technology.
              </p>
            </div>
          </div>

          <div className="timeline-item reveal-up">
            <div className="timeline-marker"></div>
            <div className="timeline-date">2021</div>
            <div className="timeline-content">
              <h3 className="timeline-title">HSC — HIGHER SECONDARY</h3>
              <p className="timeline-institution">Shree Nagindas Maganlal High School</p>
              <p className="timeline-description">
                Graduated from General Stream with 89.24 percentile rank — Grade B1. 
                Scored 543/750 marks in subjects including Statistics, Accountancy, 
                and Computer Studies.
              </p>
            </div>
          </div>

          <div className="timeline-item reveal-up">
            <div className="timeline-marker"></div>
            <div className="timeline-date">2019</div>
            <div className="timeline-content">
              <h3 className="timeline-title">SSC — SECONDARY SCHOOL</h3>
              <p className="timeline-institution">Shree Popatlal Maganlal Primary School</p>
              <p className="timeline-description">
                Achieved 85.79 percentile rank — Grade B2. Strong foundational focus on 
                Mathematics, Science, and Computer Education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
