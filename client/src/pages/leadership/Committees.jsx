import LeadershipHero from './LeadershipHero'
import './Leadership.css'
import './Committees.css'

export default function Committees() {
  return (
    <main className="committees">
      <LeadershipHero />

      <section className="leadership-section section-center committees-cta">
        <h2>You could be here!</h2>
        <p className="committees-cta-question">Interested in joining a committee?</p>
        <a
          className="btn btn-primary"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfKZ1Evn456z2hHeGPeONbaHL2WQFFurb3YcLGFPYydP7g5dg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Here
        </a>
      </section>
    </main>
  )
}
