import { NavLink } from 'react-router-dom'
import heroPhoto from '../../assets/national-convention/banquet.jpg'
import olympiadPhoto from '../../assets/national-convention/olympiad-check.jpg'
import GradientImage from '../../components/ui/GradientImage'
import './Programs.css'
import './NationalConvention.css'

export default function NationalConvention() {
  return (
    <main className="program">
      <section className="program-hero-photo">
        <img
          src={heroPhoto}
          alt="SHPE UIC members at the SHPE National Convention"
          className="program-hero-photo-img"
        />
        <div className="program-hero-photo-overlay" />
        <div className="program-hero-photo-content">
          <h1>National Convention</h1>
          <p>12,000+ future engineers, one room, four days.</p>
        </div>
      </section>

      <section className="program-lead section-center">
        <p>
          The SHPE National Convention is one of the largest pipelines for diverse,
          career-ready STEM talent in the U.S. In 2025, the event attracted 12,000+ attendees,
          including top-performing students actively seeking internships and full-time roles,
          alongside professionals and corporate recruiters, for four days of high-impact
          engagement.
        </p>
      </section>

      <section className="program-stats section-muted">
        <div className="section-center program-stats-grid">
          <div className="program-stat">
            <p className="program-stat-number">12,000+</p>
            <p className="program-stat-label">total attendees nationwide in 2025</p>
          </div>
          <div className="program-stat">
            <p className="program-stat-number">33</p>
            <p className="program-stat-label">SHPE UIC students attended (32 undergrad, 1 grad)</p>
          </div>
          <div className="program-stat">
            <p className="program-stat-number">25</p>
            <p className="program-stat-label">
              competed in technical competitions, cybersecurity challenges, and volunteering
            </p>
          </div>
        </div>
      </section>

      <section className="program-row section-center">
        <div className="program-row-text">
          <h2 className="program-row-heading">Real Outcomes</h2>
          <p>
            Through the SHPE National Convention, our members secured on-site interviews,
            scheduled follow-ups, and internship and full-time offers: proof that this
            convention works as a recruiting and early-talent conversion pipeline. This year,
            Lizette Salinas, Luis Gonzalez, and Vanessa Del Real took home $3,000 as the
            first-place team in the SHPE National Academic Olympiad Competition.
          </p>
          <NavLink to="/awards" className="national-convention-link">
            See more awards &rarr;
          </NavLink>
        </div>
        <GradientImage
          src={olympiadPhoto}
          alt="Lizette Salinas, Luis Gonzalez, and Vanessa Del Real accepting a $3,000 check for first place in the SHPE National Academic Olympiad Competition"
          variant="orange"
          className="program-row-photo"
        />
      </section>

      <section className="national-convention-cta section-dark">
        <div className="section-center national-convention-cta-inner">
          <h2>Help Send More Students to Nationals</h2>
          <p>
            Sponsorship enables SHPE UIC students to access national-level recruiting
            opportunities while providing companies with early access to highly motivated,
            diverse engineering talent. By supporting our attendance at the SHPE National
            Convention, sponsors invest directly in a proven pipeline that converts student
            engagement into real recruiting outcomes.
          </p>
          <NavLink to="/sponsors" className="btn btn-primary">
            Become a Sponsor
          </NavLink>
        </div>
      </section>
    </main>
  )
}
