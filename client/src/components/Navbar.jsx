import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram, FaLinkedin, FaDiscord, FaTiktok } from 'react-icons/fa'
import './Navbar.css'

const socials = [
  { icon: FaInstagram, href: 'https://www.instagram.com/shpeatuic/', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/company/shpe-uic/', label: 'LinkedIn' },
  { icon: FaDiscord, href: 'https://discord.gg/shpeatuic', label: 'Discord' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@shpeatuic', label: 'TikTok' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const close = () => { setMenuOpen(false); setAboutOpen(false) }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={close}>
          <span className="logo-shpe">SHPE</span>
          <span className="logo-uic"> at UIC</span>
        </NavLink>

        {/* Desktop links */}
        <ul className="navbar-links">
          <li><NavLink to="/" end onClick={close}>Home</NavLink></li>
          <li
            className="dropdown-wrap"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="dropdown-trigger">
              About <span className="chevron">▾</span>
            </button>
            {aboutOpen && (
              <ul className="dropdown-menu">
                <li><NavLink to="/who-we-are" onClick={close}>Who We Are</NavLink></li>
                <li><NavLink to="/who-we-are#leadership" onClick={close}>Leadership</NavLink></li>
              </ul>
            )}
          </li>
          <li><NavLink to="/upcoming-events" onClick={close}>Events</NavLink></li>
          <li>
            <a
              href="https://shpe.org/membership/become-a-member/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold nav-join"
              onClick={close}
            >
              Join Now
            </a>
          </li>
        </ul>

        {/* Social icons (desktop) */}
        <div className="navbar-socials">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-drawer">
          <ul>
            <li><NavLink to="/" end onClick={close}>Home</NavLink></li>
            <li><NavLink to="/who-we-are" onClick={close}>Who We Are</NavLink></li>
            <li><NavLink to="/who-we-are#leadership" onClick={close}>Leadership</NavLink></li>
            <li><NavLink to="/upcoming-events" onClick={close}>Events</NavLink></li>
            <li>
              <a
                href="https://shpe.org/membership/become-a-member/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                onClick={close}
              >
                Join Now
              </a>
            </li>
          </ul>
          <div className="mobile-socials">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
