import { BOARD_PILLARS } from '../../data/leadership'
import OfficerCard from '../../components/cards/OfficerCard'
import SectionTitle from '../../components/ui/SectionTitle'
import LeadershipHero from './LeadershipHero'
import './Leadership.css'

export default function GeneralBoard() {
  return (
    <main className="general-board">
      <LeadershipHero />

      {BOARD_PILLARS.map((pillar) => (
        <section key={pillar.pillar} className="leadership-section section-center">
          <SectionTitle title={pillar.team} />
          <p className="leadership-led-by">
            Led by {pillar.leaders.map((leader) => `${leader.name} (${leader.role})`).join(' & ')}
          </p>
          <div className="leadership-grid">
            {pillar.members.map((member) => (
              <OfficerCard key={`${pillar.team}-${member.role}-${member.name}`} {...member} />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
