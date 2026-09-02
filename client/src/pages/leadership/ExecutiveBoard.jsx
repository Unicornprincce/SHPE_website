import { EXECUTIVE_BOARD, FACULTY_ADVISORS } from '../../data/leadership'
import OfficerCard from '../../components/cards/OfficerCard'
import LeadershipHero from './LeadershipHero'
import './Leadership.css'

export default function ExecutiveBoard() {
  return (
    <main className="executive-board">
      <LeadershipHero />

      <section className="leadership-section section-center">
        <div className="leadership-grid">
          {EXECUTIVE_BOARD.map((member) => (
            <OfficerCard key={`${member.role}-${member.name}`} {...member} />
          ))}
        </div>
      </section>

      <section className="leadership-section section-center leadership-faculty-advisors">
        <h2 className="leadership-faculty-advisors-title">FACULTY ADVISORS</h2>
        <div className="leadership-grid">
          {FACULTY_ADVISORS.map((member) => (
            <OfficerCard key={member.name} {...member} />
          ))}
        </div>
      </section>
    </main>
  )
}
