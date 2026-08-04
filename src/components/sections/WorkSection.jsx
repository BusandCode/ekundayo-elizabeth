import React from 'react'

const WorkSection = () => {
  return (
    <section className="section" id="work">
      <div className="section-header">
        <p className="section-label">Services</p>
        <h2 className="section-title">What do I help?</h2>
        <p className="section-copy">
          With over 2 years of experience in fintech, I build products from discovery to delivery using an Agile, user-centered approach.
          Leveraging Jira for sprint management, Confluence for documentation, Figma for design collaboration, Miro for discovery workshops, and Notion for planning,
          I translate customer insights into product strategies and deliver solutions that create measurable value for users and businesses.
        </p>
        <p className="section-copy">
          I support teams through product discovery, roadmap alignment, and launch-ready delivery so ideas move from prototype to customers quickly and clearly.
        </p>
      </div>

      <div className="project-grid">
        <article className="project-card">
          <h3>Product Discovery</h3>
          <p>
            Align research, strategy, and product teams to uncover what users need and where the business can win.
          </p>
        </article>

        <article className="project-card">
          <h3>Agile Delivery</h3>
          <p>
            Bring clarity to execution using sprint planning, roadmaps, and collaborative tools that keep delivery on track.
          </p>
        </article>

        <article className="project-card">
          <h3>Fintech Product Design</h3>
          <p>
            Build digital financial experiences that are trustworthy, easy to use, and designed to support growth and adoption.
          </p>
        </article>
      </div>
    </section>
  )
}

export default WorkSection
