import { NavLink } from 'react-router-dom'
import { FaInstagram, FaDiscord } from 'react-icons/fa6'
import { SiLinktree } from 'react-icons/si'
import getInvolvedPhoto from '../assets/join-us/get-involved.jpg'
import nationalsPhoto from '../assets/join-us/nationals.jpg'
import GradientImage from '../components/ui/GradientImage'
import './JoinUs.css'

export default function JoinUs() {
  return (
    <main className="join-us">
      <section className="join-us-hero section-dark">
        <div className="section-center join-us-hero-inner">
          <h1>Join Us</h1>
          <p>Show up, get involved, get rewarded.</p>
        </div>
      </section>

      <section className="join-us-row join-us-row-single section-center">
        <div className="join-us-row-text">
          <h2 className="join-us-row-heading">Become a Member</h2>
          <p>
            You can become a paid member through SHPE National using the button below. You
            don&rsquo;t need to be a paid member to come to our events &mdash; paying just helps
            support SHPE and unlocks access to the National Convention.
          </p>
          <a
            className="btn btn-primary"
            href="https://www.shpeconnect.org/eweb/DynamicPage.aspx?WebCode=LoginRequired&expires=yes&Site=shpe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a Member
          </a>
        </div>
      </section>

      <section className="join-us-row section-center">
        <div className="join-us-row-text">
          <h2 className="join-us-row-heading">Get Involved</h2>
          <p>
            The best way to get involved is to just show up and talk to everyone. We post flyers
            on our Instagram every week, plus a full semester schedule if you want to plan ahead.
            Between our committees, community service opportunities, and our MentorSHPE program,
            there&rsquo;s more than one way in.
          </p>
          <div className="join-us-row-buttons">
            <a
              className="btn btn-primary"
              href="https://www.instagram.com/shpeatuic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us on Instagram
            </a>
            <NavLink className="btn btn-outline-navy" to="/mentorshpe">
              Explore MentorSHPE
            </NavLink>
          </div>
        </div>
        <GradientImage
          src={getInvolvedPhoto}
          alt="SHPE UIC members at a General Body Meeting"
          variant="orange"
          className="join-us-row-photo"
        />
      </section>

      <section className="join-us-row join-us-row-reverse section-center">
        <GradientImage
          src={nationalsPhoto}
          alt="SHPE UIC members at an event"
          variant="orange"
          className="join-us-row-photo"
        />
        <div className="join-us-row-text">
          <h2 className="join-us-row-heading">Make It to Nationals</h2>
          <p>
            We&rsquo;ll track event attendance on a leaderboard throughout the year. The most
            involved members earn a spot in our delegation to the SHPE National Convention.
          </p>
          <button type="button" className="btn btn-primary btn-disabled" disabled>
            View Leaderboard
          </button>
          <p className="join-us-coming-soon">Coming soon</p>
        </div>
      </section>

      <section className="join-us-connect section-dark">
        <div className="section-center join-us-connect-inner">
          <h2>Connect With Us</h2>
          <div className="join-us-connect-icons">
            <a
              href="https://www.instagram.com/shpeatuic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SHPE at UIC on Instagram"
            >
              <FaInstagram aria-hidden="true" />
              <span>Instagram</span>
            </a>
            <a
              href="https://discord.gg/PS4AdaSK9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SHPE at UIC on Discord"
            >
              <FaDiscord aria-hidden="true" />
              <span>Discord</span>
            </a>
            <a
              href="https://linktr.ee/SHPE_UIC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SHPE at UIC on Linktree"
            >
              <SiLinktree aria-hidden="true" />
              <span>Linktree</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
