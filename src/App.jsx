import React from 'react'
import './App.css'
import NavBar from './components/layout/NavBar'
import AboutSection from './components/sections/AboutSection'
import WorkSection from './components/sections/WorkSection'
import ProductsSection from './components/sections/ProductsSection'
import ContactSection from './components/sections/ContactSection'

const App = () => {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="page-content">
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <h1>Hi, I'm Elizabeth</h1>
            <p className="hero-lead">A builder of products. A builder of businesses.</p>
            <p className="hero-subtitle">Turning customer problems into products that drive business growth.</p>
            <p className="hero-detail">I translate customer insight into clear product strategies, delivering solutions that scale and strengthen teams.</p>
            <div className="hero-actions">
              <a className="hero-cta hero-cta--primary" href="#work">See my work</a>
              <a className="hero-cta hero-cta--secondary" href="#contact">Talk with me</a>
            </div>
            <div className="hero-highlights">
              <div>
                <strong>2+</strong>
                <span>years in fintech</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>product launches</span>
              </div>
              <div>
                <strong>5+</strong>
                <span>teams aligned</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img src="/hero.jpeg" alt="Elizabeth Ekundayo" />
            </div>
          </div>
        </section>
        <AboutSection />
        <WorkSection />
        <ProductsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App