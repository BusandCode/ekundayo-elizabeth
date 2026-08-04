import React from 'react'

const ContactSection = () => {
  return (
    <section className="section" id="contact">
      <div className="section-header">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-copy">
          Let's get started on your project. I’m available for product management and fintech strategy work, especially where design, user insight, and agile delivery come together.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-column">
          <div className="contact-method-card">
            <div className="contact-method-icon">✉️</div>
            <div>
              <p className="contact-method-title">Email</p>
              <p className="contact-method-text">hello@elizabethekundayo.com</p>
            </div>
            <a className="contact-method-action" href="mailto:hello@elizabethekundayo.com">
              Send a message
            </a>
          </div>

          <div className="contact-method-card">
            <div className="contact-method-icon">in</div>
            <div>
              <p className="contact-method-title">LinkedIn</p>
              <p className="contact-method-text">Elizabeth Ekundayo</p>
            </div>
            <a className="contact-method-action" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              View profile
            </a>
          </div>

          <div className="contact-method-card">
            <div className="contact-method-icon">🐙</div>
            <div>
              <p className="contact-method-title">GitHub</p>
              <p className="contact-method-text">elizabeth-ekundayo</p>
            </div>
            <a className="contact-method-action" href="https://github.com" target="_blank" rel="noreferrer">
              View profile
            </a>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-control">
            <label htmlFor="name">Your Full Name</label>
            <input id="name" type="text" placeholder="Your Full Name" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" placeholder="Your Email" />
          </div>
          <div className="form-control">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="7" placeholder="Your Message" />
          </div>
          <button className="contact-submit" type="button">Send Message</button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
