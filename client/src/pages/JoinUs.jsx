import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa6'
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
            Fill out our chapter form below to join SHPE at UIC. You don&rsquo;t need to be a
            paid member to come to our events, but becoming one unlocks access to the
            National Convention and other SHPE National perks.
          </p>
          <a
            className="btn btn-primary"
            href="https://docs.google.com/forms/d/1s6pSxd-URO_W11gO6oebQcuEEau4vyb1xPpnXYpxzHQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fill Out Our Form
          </a>
          <p className="join-us-form-question">Want to become a paid member?</p>
          <a
            className="btn btn-outline-navy"
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
            <a
              className="btn btn-discord"
              href="https://discord.gg/qH5Ms83usz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our Discord
            </a>
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
            We&rsquo;ll track event attendance on a leaderboard throughout the year. Members at the top of the leaderboard will be aknowledged!
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
              href="https://www.linkedin.com/company/shpe-at-uic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SHPE at UIC on LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
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
