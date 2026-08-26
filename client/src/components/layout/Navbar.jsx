import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaXmark, FaChevronDown } from 'react-icons/fa6'
import logo from '../../assets/logos/SHPE_logo_horiz_University of Illinois at Chicago_PMS.png'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'What We Do',
    children: [
      { label: 'SHPEtinas', to: '/shpetinas' },
      { label: 'MentorSHPE', to: '/mentorshpe' },
      { label: 'Dia de Ciencias', to: '/dia-de-ciencias' },
    ],
  },
  { label: 'Officers', to: '/officers' },
  { label: 'Awards', to: '/awards' },
  { label: 'Sponsors', to: '/sponsors' },
  { label: 'Calendar', to: '/calendar' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  // Close the mobile drawer whenever the route changes
  useEffect(() => {
    const handleRouteChange = () => setMobileOpen(false)
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
          <span className="logo-chip">
            <img src={logo} alt="SHPE at UIC" />
          </span>
        </NavLink>

        <nav className="navbar-links" aria-label="Primary">
          {NAV_LINKS.map((item) =>
            item.children ? (
              <div className="navbar-dropdown" key={item.label}>
                <button
                  type="button"
                  className="navbar-dropdown-trigger"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {item.label}
                  <FaChevronDown aria-hidden="true" className="navbar-dropdown-icon" />
                </button>
                <div className="navbar-dropdown-menu">
                  {item.children.map((child) => (
                    <NavLink key={child.to} to={child.to} className="navbar-dropdown-link">
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <NavLink to="/join-us" className="btn btn-primary navbar-cta">
          Join Us
        </NavLink>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((item) =>
          item.children ? (
            <div className="navbar-mobile-group" key={item.label}>
              <button
                type="button"
                className="navbar-mobile-group-trigger"
                aria-expanded={mobileDropdownOpen}
                onClick={() => setMobileDropdownOpen((open) => !open)}
              >
                {item.label}
                <FaChevronDown
                  aria-hidden="true"
                  className={`navbar-dropdown-icon ${mobileDropdownOpen ? 'rotated' : ''}`}
                />
              </button>
              {mobileDropdownOpen && (
                <div className="navbar-mobile-submenu">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className="navbar-mobile-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `navbar-mobile-link${isActive ? ' active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          )
        )}
        <NavLink to="/join-us" className="btn btn-primary navbar-mobile-cta" onClick={() => setMobileOpen(false)}>
          Join Us
        </NavLink>
      </div>
    </header>
  )
}
