import React, { useState } from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo">EE</span>
        <span className="navbar__title">Elizabeth Ekundayo</span>
      </div>

      <button
        className="navbar__menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navbar__nav ${isMenuOpen ? 'is-open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#work" onClick={closeMenu}>Services</a>
        <a href="#products" onClick={closeMenu}>Products</a>
        <a href="#contact" onClick={closeMenu}>Contacts</a>
      </nav>

      <a className="navbar__cta" href="#contact" onClick={closeMenu}>Hire Me</a>
    </header>
  )
}

export default NavBar