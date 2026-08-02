import { NavLink } from 'react-router-dom'
import { FaInstagram, FaDiscord } from 'react-icons/fa6'
import logo from '../../assets/logos/shpelogo.jpg'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'SHPEtinas', to: '/shpetinas' },
  { label: 'MentorSHPE', to: '/mentorshpe' },
  { label: 'Officers', to: '/officers' },
  { label: 'Join Us', to: '/join-us' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner section-center">
        <div className="footer-brand">
          <img src={logo} alt="SHPE at UIC" className="footer-logo" />
          <p>
            Society of Hispanic Professional Engineers — University of Illinois Chicago chapter.
            Leading Hispanics in STEM.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <h4>Quick Links</h4>
          {QUICK_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="footer-social">
          <h4>Connect</h4>
          <div className="footer-social-icons">
            <a
              href="https://www.instagram.com/shpeatuic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SHPE at UIC on Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href="https://discord.gg/PS4AdaSK9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SHPE at UIC on Discord"
            >
              <FaDiscord aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} SHPE at UIC. All rights reserved.</p>
      </div>
    </footer>
  )
}
