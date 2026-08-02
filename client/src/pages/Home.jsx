import { Link } from 'react-router-dom'
import {
  FaGraduationCap, FaBriefcase, FaStar, FaUsers, FaHandsHelping,
  FaChevronDown,
} from 'react-icons/fa'
import heroBg from '../assets/hero.png'
import './Home.css'

const pillarsStrip = [
  { icon: FaGraduationCap, label: 'Academic' },
  { icon: FaBriefcase,     label: 'Professional' },
  { icon: FaStar,          label: 'Leadership' },
  { icon: FaUsers,         label: 'Chapter Dev' },
  { icon: FaHandsHelping,  label: 'Outreach' },
]

const pillars = [
  {
    id: 'academic',
    title: 'Academic Development',
    desc: 'We support academic success through study sessions, tutoring resources, and peer mentorship — ensuring every member has the tools to excel in their coursework and beyond.',
    img: heroBg,
    imgAlt: 'SHPE members studying together',
  },
  {
    id: 'professional',
    title: 'Professional Development',
    desc: 'Resume workshops, mock interviews, and direct connections to top engineering companies. We bridge the gap between the classroom and your career.',
    img: heroBg,
    imgAlt: 'SHPE networking event',
  },
  {
    id: 'leadership',
    title: 'Leadership Development',
    desc: 'From committee chairs to executive board roles, SHPE at UIC gives members the opportunity to lead, inspire, and make a lasting impact on the chapter and community.',
    img: heroBg,
    imgAlt: 'SHPE leadership meeting',
  },
  {
    id: 'chapter',
    title: 'Chapter Development',
    desc: 'We grow our chapter through intentional recruitment, member retention, and a strong organizational culture that keeps SHPE at UIC thriving year after year.',
    img: heroBg,
    imgAlt: 'SHPE chapter gathering',
  },
  {
    id: 'outreach',
    title: 'Outreach & Community Service',
    desc: 'Giving back is at our core. We promote STEM awareness in the K-12 community and partner with local organizations to build the next generation of Hispanic engineers.',
    img: heroBg,
    imgAlt: 'SHPE community outreach event',
  },
]

const stats = [
  { value: '100+', label: 'Active Members', img: heroBg },
  { value: '40+',  label: 'Years of SHPE National', img: heroBg },
  { value: '20+',  label: 'Events Per Year', img: heroBg },
  { value: '5',    label: 'Core Pillars', img: heroBg },
  { value: '15+',  label: 'Partner Companies', img: heroBg },
  { value: '#1',   label: 'Hispanic STEM Org in the US', img: heroBg },
]

const partners = {
  gold:   [{ name: 'UL Solutions', logo: null }],
  bronze: [{ name: 'Nokia',        logo: null }],
}

export default function Home() {
  return (
    <main className="home">

      {/* ── A: Hero ── */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Society of Hispanic Professional Engineers</p>
          <h1 className="hero-title">SHPE <span className="hero-accent">at UIC</span></h1>
          <p className="hero-sub">
            Empowering the next generation of Hispanic engineers through community, leadership, and opportunity — right here at the University of Illinois Chicago.
          </p>
          <div className="hero-buttons">
            <a
              href="https://shpe.org/membership/become-a-member/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Join Now
            </a>
            <Link to="/who-we-are" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
        <a href="#pillars-strip" className="hero-scroll-cue" aria-label="Scroll down">
          <FaChevronDown />
        </a>
      </section>

      {/* ── B: Icon Strip ── */}
      <section className="pillars-strip section-dark" id="pillars-strip">
        <div className="pillars-strip-inner">
          {pillarsStrip.map(({ icon: Icon, label }) => (
            <div className="strip-item" key={label}>
              <Icon className="strip-icon" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── C: Mission Statement ── */}
      <section className="mission-section section-light">
        <div className="mission-inner">
          <p className="eyebrow-gold">Our Mission</p>
          <h2 className="mission-heading">Empowering Hispanic Engineers at UIC</h2>
          <p className="mission-body">
            SHPE at UIC is a chapter of the Society of Hispanic Professional Engineers — the nation's largest Hispanic STEM organization. We are a community of driven students and allies committed to professional growth, academic excellence, and uplifting the Hispanic community through engineering.
          </p>
          <Link to="/who-we-are" className="btn btn-gold">Learn More About Us</Link>
        </div>
      </section>

      {/* ── D: Five Pillars ── */}
      <section className="five-pillars section-dark">
        <h2 className="pillars-heading">OUR FIVE PILLARS</h2>
        {pillars.map((p, i) => (
          <div
            key={p.id}
            className={`pillar-split ${i % 2 === 0 ? 'img-left' : 'img-right'}`}
          >
            <div
              className="pillar-img"
              style={{ backgroundImage: `url(${p.img})` }}
              role="img"
              aria-label={p.imgAlt}
            />
            <div className="pillar-text">
              <div className="pillar-rule" />
              <h3 className="pillar-title">{p.title.toUpperCase()}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── E: Stats Grid ── */}
      <section className="stats-section section-light">
        <div className="stats-inner">
          <h2 className="stats-heading">SHPE AT UIC BY THE NUMBERS</h2>
          <div className="stats-grid">
            {stats.map(s => (
              <div
                key={s.label}
                className="stat-card"
                style={{ backgroundImage: `url(${s.img})` }}
              >
                <div className="stat-card-overlay" />
                <div className="stat-card-content">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── F: Join CTA ── */}
      <section className="join-cta section-dark">
        <div className="join-cta-inner">
          <h2>Ready to Join Our Familia?</h2>
          <p>
            Become part of the largest Hispanic STEM organization in the U.S. — right here at UIC. No experience required. Just bring your drive.
          </p>
          <div className="join-cta-form">
            <input type="email" placeholder="Your email address" className="join-email-input" />
            <a
              href="https://shpe.org/membership/become-a-member/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Join Now
            </a>
          </div>
          <p className="join-note">Or follow us on social media to stay connected.</p>
        </div>
      </section>

      {/* ── G: Partners ── */}
      <section className="partners-section section-light">
        <div className="partners-inner">
          <h2 className="partners-heading">OUR PARTNERS</h2>
          <p className="partners-sub">Companies who invest in our members' futures.</p>

          <p className="partner-tier">GOLD</p>
          <div className="partner-logos">
            {partners.gold.map(p => (
              <div key={p.name} className="partner-logo-card">
                <span className="partner-name">{p.name}</span>
              </div>
            ))}
          </div>

          <p className="partner-tier">BRONZE</p>
          <div className="partner-logos">
            {partners.bronze.map(p => (
              <div key={p.name} className="partner-logo-card">
                <span className="partner-name">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
