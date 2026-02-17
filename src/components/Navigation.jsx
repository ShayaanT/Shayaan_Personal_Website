import { useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <a href="#" className="logo">ST</a>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#experience" className="nav-link" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}
