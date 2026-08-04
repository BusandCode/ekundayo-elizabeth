import React from 'react'

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo">EE</span>
        <span className="navbar__title">Elizabeth Ekundayo</span>
      </div>

      <nav className="navbar__nav">
        <a href="#about">About</a>
        <a href="#work">Services</a>
        <a href="#products">Products</a>
        <a href="#contact">Contacts</a>
      </nav>

      <a className="navbar__cta" href="#contact">Hire Me</a>
    </header>
  )
}

export default NavBar