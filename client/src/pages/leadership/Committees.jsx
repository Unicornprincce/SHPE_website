import { NavLink } from 'react-router-dom'
import LeadershipHero from './LeadershipHero'
import './Leadership.css'
import './Committees.css'

export default function Committees() {
  return (
    <main className="committees">
      <LeadershipHero />

      <section className="leadership-section section-center committees-cta">
        <h2>You could be here!</h2>
        <p>Committee sign-up form will be shared soon!</p>
        <p className="committees-cta-question">Interested in getting involved in the meantime?</p>
        <NavLink to="/join-us" className="btn btn-primary">
          Apply Here
        </NavLink>
      </section>
    </main>
  )
}
