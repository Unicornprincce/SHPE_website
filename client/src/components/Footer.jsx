import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedin, FaDiscord, FaTiktok } from 'react-icons/fa'
import './Footer.css'

const socials = [
  { icon: FaInstagram, href: 'https://www.instagram.com/shpeatuic/', label: 'Instagram' },
  { icon: FaLinkedin,  href: 'https://www.linkedin.com/company/shpe-uic/', label: 'LinkedIn' },
  { icon: FaDiscord,   href: 'https://discord.gg/shpeatuic', label: 'Discord' },
  { icon: FaTiktok,    href: 'https://www.tiktok.com/@shpeatuic', label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            <span className="logo-shpe">SHPE</span>
            <span className="logo-uic"> at UIC</span>
          </span>
          <p>Society of Hispanic Professional Engineers<br />University of Illinois Chicago</p>
          <p className="footer-email">
            <a href="mailto:shpe.uic@gmail.com">shpe.uic@gmail.com</a>
          </p>
          <div className="footer-socials">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/who-we-are">Who We Are</Link></li>
            <li><Link to="/who-we-are#leadership">Leadership</Link></li>
            <li><Link to="/upcoming-events">Upcoming Events</Link></li>
          </ul>
        </div>

        <div className="footer-connect">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="https://shpe.org" target="_blank" rel="noreferrer">SHPE National</a>
            </li>
            <li>
              <a href="https://engineering.uic.edu" target="_blank" rel="noreferrer">UIC Engineering</a>
            </li>
            <li>
              <a href="https://shpe.org/membership/become-a-member/" target="_blank" rel="noreferrer">
                Become a Member
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SHPE at UIC · University of Illinois Chicago · All rights reserved.</p>
      </div>
    </footer>
  )
}
