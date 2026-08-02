import heroBg from '../assets/hero.png'
import './WhoWeAre.css'

const stats = [
  { value: '100+',  label: 'Active Members',          img: heroBg },
  { value: '40+',   label: 'Years of SHPE National',  img: heroBg },
  { value: '20+',   label: 'Events Per Year',          img: heroBg },
  { value: '5',     label: 'Core Pillars',             img: heroBg },
  { value: '15+',   label: 'Partner Companies',        img: heroBg },
  { value: '30+',   label: 'Majors Represented',       img: heroBg },
]

const leaders = [
  { name: 'President',                  role: 'Executive Board', initials: 'P'  },
  { name: 'Vice President',             role: 'Executive Board', initials: 'VP' },
  { name: 'Secretary',                  role: 'Executive Board', initials: 'S'  },
  { name: 'Treasurer',                  role: 'Executive Board', initials: 'T'  },
  { name: 'Professional Dev. Chair',    role: 'Committee Lead',  initials: 'PD' },
  { name: 'Social Chair',               role: 'Committee Lead',  initials: 'SC' },
  { name: 'Academic Chair',             role: 'Committee Lead',  initials: 'AC' },
  { name: 'Outreach Chair',             role: 'Committee Lead',  initials: 'OC' },
]

export default function WhoWeAre() {
  return (
    <main className="who-page">

      {/* ── A: Hero Banner ── */}
      <section
        className="who-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
        id="top"
      >
        <div className="who-hero-overlay" />
        <div className="who-hero-content">
          <p className="who-eyebrow">About Us</p>
          <h1>WHO WE ARE</h1>
        </div>
      </section>

      {/* ── B: Stats Grid ── */}
      <section className="who-stats section-light">
        <div className="who-stats-inner">
          <h2 className="who-stats-heading">SHPE AT UIC BY THE NUMBERS</h2>
          <div className="who-stats-grid">
            {stats.map(s => (
              <div
                key={s.label}
                className="who-stat-card"
                style={{ backgroundImage: `url(${s.img})` }}
              >
                <div className="who-stat-overlay" />
                <div className="who-stat-content">
                  <span className="who-stat-value">{s.value}</span>
                  <span className="who-stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C: About splits ── */}
      <section className="about-split section-dark">
        <div className="split-row">
          <div className="split-text">
            <div className="split-rule" />
            <h2 className="split-title">About SHPE National</h2>
            <p>
              The Society of Hispanic Professional Engineers (SHPE) was founded in 1974 in Los Angeles, California by a group of engineers employed by the city of Los Angeles. Today it is the nation's largest Hispanic STEM organization, with a network of over 300 professional and student chapters across the country.
            </p>
            <p>
              SHPE's mission is to change the social, political, and economic landscape of America through empowering the Hispanic community with STEM education, careers, and an influential professional network.
            </p>
          </div>
          <div
            className="split-img"
            style={{ backgroundImage: `url(${heroBg})` }}
            role="img"
            aria-label="SHPE national conference"
          />
        </div>

        <div className="split-row reverse">
          <div className="split-text">
            <div className="split-rule" />
            <h2 className="split-title">About SHPE at UIC</h2>
            <p>
              We are the SHPE chapter at the University of Illinois Chicago — a community of Hispanic engineering students and allies who have been around for over 40 years. Located in the heart of Chicago, we are uniquely positioned to connect our members with top companies, diverse alumni networks, and a city full of opportunity.
            </p>
            <p>
              Whether you're looking to connect with professionals from various fields, find new friends to study together, or build your career — SHPE at UIC has a lot to offer. Come check us out at our next event!
            </p>
          </div>
          <div
            className="split-img"
            style={{ backgroundImage: `url(${heroBg})` }}
            role="img"
            aria-label="SHPE at UIC members"
          />
        </div>
      </section>

      {/* ── D: Mission & Vision ── */}
      <section className="mission-vision section-light">
        <div className="mv-inner">
          <div className="mv-card">
            <div className="mv-rule" />
            <h3 className="mv-heading">Our Mission</h3>
            <p>
              To promote the development of Hispanics in STEM through a network of resources, support, and inspiration that empowers individuals to achieve their fullest potential.
            </p>
          </div>
          <div className="mv-card">
            <div className="mv-rule" />
            <h3 className="mv-heading">Our Vision</h3>
            <p>
              A world where Hispanics are fully represented as leaders and innovators in STEM, driving progress and shaping the future of technology and engineering.
            </p>
          </div>
        </div>
      </section>

      {/* ── E: Leadership ── */}
      <section className="leadership section-dark" id="leadership">
        <div className="leadership-inner">
          <h2 className="leadership-heading">MEET THE BOARD</h2>
          <p className="leadership-sub">The dedicated leaders who make SHPE at UIC possible.</p>
          <div className="leaders-grid">
            {leaders.map(l => (
              <div className="leader-card" key={l.name}>
                <div className="leader-avatar">
                  <span>{l.initials}</span>
                </div>
                <h4 className="leader-name">{l.name}</h4>
                <p className="leader-role">{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
