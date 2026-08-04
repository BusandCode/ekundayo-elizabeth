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
            <p className="eyebrow">Portfolio</p>
            <h1>Get to know me.</h1>
            <p>
              Howdy, I'm Elizabeth. I've worn a few hats throughout my career from customer support to marketing and now product management.
              Today, I build digital financial products with an Agile mindset, combining user insight, strategy, and execution to create products that people trust and businesses grow with.
            </p>
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