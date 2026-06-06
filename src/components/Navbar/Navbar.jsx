import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Studio', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQs', href: '#faqs' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} id="navbar">
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo" aria-label="Elementum home">
          Elementum
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="navbar__mobile-menu" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
