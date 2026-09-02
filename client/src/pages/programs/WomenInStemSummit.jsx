import { NavLink } from 'react-router-dom'
import heroPhoto from '../../assets/programs/wiss-group.jpg'
import panelPhoto from '../../assets/programs/wiss-panel.jpg'
import attendeesPhoto from '../../assets/programs/wiss-attendees.jpg'
import networkingPhoto from '../../assets/programs/wiss-networking.jpg'
import GradientImage from '../../components/ui/GradientImage'
import './Programs.css'

export default function WomenInStemSummit() {
  return (
    <main className="program">
      <section className="program-hero-photo">
        <img
          src={heroPhoto}
          alt="Attendees of the SHPE UIC Women in STEM Summit gathered at the closing of the event"
          className="program-hero-photo-img"
        />
        <div className="program-hero-photo-overlay" />
        <div className="program-hero-photo-content">
          <h1>Women in STEM Summit</h1>
          <p>Illuminating the future for women in technology.</p>
        </div>
      </section>

      <section className="program-lead section-center">
        <p>
          SHPE UIC hosted a Women in STEM Summit that gathered over 200 attendees, students
          and professionals alike, along with 20+ participating companies. The event
          featured interactive workshops, awarded a $1,000 scholarship, and gave away a National
          Convention ticket, creating a high-impact day that empowered women in technology while
          connecting them with career opportunities.
        </p>
      </section>

      <section className="program-stats section-muted">
        <div className="section-center program-stats-grid">
          <div className="program-stat">
            <p className="program-stat-number">200+</p>
            <p className="program-stat-label">students and professionals in attendance</p>
          </div>
          <div className="program-stat">
            <p className="program-stat-number">20+</p>
            <p className="program-stat-label">participating companies</p>
          </div>
          <div className="program-stat">
            <p className="program-stat-number">$1,000</p>
            <p className="program-stat-label">
              scholarship awarded, plus a National Convention ticket giveaway
            </p>
          </div>
        </div>
      </section>

      <section className="program-row section-center">
        <div className="program-row-text">
          <h2 className="program-row-heading">Panels &amp; Workshops</h2>
          <p>
            The day is built around interactive workshops and panels with women already working in
            the fields our members are headed into: engineers, managers, and executives who
            talk openly about how they got there and what they&rsquo;d do differently.
          </p>
        </div>
        <GradientImage
          src={panelPhoto}
          alt="A company panel of women engineers and leaders speaking at the Women in STEM Summit"
          variant="orange"
          className="program-row-photo"
        />
      </section>

      <section className="program-row program-row-reverse section-center">
        <GradientImage
          src={attendeesPhoto}
          alt="Students at the Women in STEM Summit"
          variant="orange"
          className="program-row-photo"
        />
        <div className="program-row-text">
          <h2 className="program-row-heading">Career Opportunities</h2>
          <p>
            With 20+ companies in the room, the summit is as much a recruiting floor as it is a
            conference. Attendees leave with contacts, referrals, and a much clearer sense of what
            these roles actually look like, and one of them left with a $1,000 scholarship.
          </p>
        </div>
      </section>

      <section className="program-row section-center">
        <div className="program-row-text">
          <h2 className="program-row-heading">Part of SHPEtinas</h2>
          <p>
            The summit is the largest event run through our SHPEtinas program, alongside the
            Chicagoland SHPEtina Brunch and hands-on workshops throughout the year. Together they
            elevate and inspire the next generation of Latina engineers.
          </p>
          <div className="program-row-buttons">
            <a
              className="btn btn-primary"
              href="https://www.instagram.com/womeninstemsummit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Summit on Instagram
            </a>
            <NavLink className="btn btn-outline-navy" to="/shpetinas">
              Explore SHPEtinas
            </NavLink>
          </div>
        </div>
        <GradientImage
          src={networkingPhoto}
          alt="SHPE UIC members hosting the Women in STEM Summit networking area"
          variant="orange"
          className="program-row-photo"
        />
      </section>
    </main>
  )
}
