import React from 'react'

const AboutSection = () => {
  return (
    <section className="section about-section" id="about">
      <div className="section-header">
        <p className="section-label">About</p>
        <h2 className="section-title">I build fintech products with clarity and trust.</h2>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <p className="section-copy">
            Howdy, I’m Elizabeth. I've worn a few hats throughout my career from customer support to marketing and now product management.
            Today, I build digital financial products with an Agile mindset, combining user insight, strategy, and execution to create products that people trust and businesses grow with.
          </p>

          <p className="section-copy">
            I translate customer insights into product strategies and deliver solutions that create measurable value for users and businesses.
            My background helps me connect product, marketing, and operations into one clear path from idea to launch.
          </p>

          <div className="about-highlights">
            <div className="about-card">
              <h3>Fintech experience</h3>
              <p>
                I work with cross-functional teams to turn customer research into product roadmaps, launch-ready features, and strong go-to-market runs.
              </p>
            </div>
            <div className="about-card">
              <h3>Growth & delivery</h3>
              <p>
                From discovery workshops to sprint planning, I keep teams aligned and move product work forward with practical, measurable outcomes.
              </p>
            </div>
            <div className="about-card">
              <h3>Clear communication</h3>
              <p>
                I translate complex product strategy into clear designs, user flows, and launch plans that stakeholders can trust.
              </p>
            </div>
          </div>
        </div>

        <div className="about-panel">
          <div className="about-visual">
            <div className="about-visual-frame">
              <div className="about-visual-block" />
              <div className="about-visual-line" />
              <div className="about-visual-line short" />
            </div>
          </div>

          <div className="about-meta">
            <div className="about-meta-item">
              <span className="about-meta-value">2+</span>
              <span>Years in fintech</span>
            </div>
            <div className="about-meta-item">
              <span className="about-meta-value">10+</span>
              <span>Product launches</span>
            </div>
            <div className="about-meta-item">
              <span className="about-meta-value">5+</span>
              <span>Cross-functional teams worked with</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
