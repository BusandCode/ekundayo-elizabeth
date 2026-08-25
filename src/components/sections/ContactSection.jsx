import React from 'react'

const ContactSection = () => {
  return (
    <section className="section" id="contact">
      <div className="section-header">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-copy">
          Let's get started on your project. I'm available for product management and fintech strategy work, especially where design, user insight, and agile delivery come together.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-column">
          <div className="contact-method-card">
            <div className="contact-method-icon">✉️</div>
            <div>
              <p className="contact-method-title">Email</p>
              <p className="contact-method-text">ekundayoelizabeth43@gmail.com</p>
            </div>
            <a className="contact-method-action" href="mailto:ekundayoelizabeth43@gmail.com">
              Send a message
            </a>
          </div>

          <div className="contact-method-card">
            <div className="contact-method-icon">in</div>
            <div>
              <p className="contact-method-title">LinkedIn</p>
              <p className="contact-method-text">Elizabeth Ekundayo</p>
            </div>
            <a 
              className="contact-method-action" 
              href="https://www.linkedin.com/in/elizabeth-ekundayo-b5b5b4392?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noreferrer"
            >
              View profile
            </a>
          </div>

          <div className="contact-method-card">
            <div className="contact-method-icon">📸</div>
            <div>
              <p className="contact-method-title">Instagram</p>
              <p className="contact-method-text">@ears_that_listen</p>
            </div>
            <a 
              className="contact-method-action" 
              href="https://www.instagram.com/ears_that_listen?igsi=MXdnN2RvOXZnZm81dQ==" 
              target="_blank" 
              rel="noreferrer"
            >
              View profile
            </a>
          </div>

          {/* GitHub removed as requested */}
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