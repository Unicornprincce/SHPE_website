import { NavLink } from 'react-router-dom'
import { leadershipGroupPhoto } from '../../data/leadership'
import './Leadership.css'

const TABS = [
  { label: 'Executive Board', to: '/leadership/executive-board' },
  { label: 'General Board', to: '/leadership/general-board' },
  { label: 'Technical Teams', to: '/leadership/technical-teams' },
  { label: 'Committees', to: '/leadership/committees' },
]

/**
 * Shared hero banner for every Leadership page: big "LEADERSHIP" title over
 * the board photo, with the section tabs emphasized underneath.
 */
export default function LeadershipHero() {
  return (
    <section className="leadership-hero">
      <img src={leadershipGroupPhoto} alt="SHPE at UIC Leadership" className="leadership-hero-img" />
      <div className="leadership-hero-overlay" />
      <div className="section-center leadership-hero-inner">
        <h1 className="leadership-hero-title">LEADERSHIP</h1>
        <nav className="leadership-tabs" aria-label="Leadership sections">
          {TABS.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) => `leadership-tab${isActive ? ' active' : ''}`}
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  )
}
