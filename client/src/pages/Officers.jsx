import groupPhoto from '../assets/officers/group photo.jpeg'
import { OFFICER_SECTIONS } from '../data/officers'
import OfficerCard from '../components/cards/OfficerCard'
import SectionTitle from '../components/ui/SectionTitle'
import './Officers.css'

export default function Officers() {
  return (
    <main className="officers">
      <section className="officers-hero">
        <img src={groupPhoto} alt="SHPE at UIC board members" className="officers-hero-img" />
        <div className="officers-hero-overlay" />
        <div className="section-center officers-hero-inner">
          <h1>SHPE at UIC Board Members</h1>
          <p>Meet the students leading the chapter this year.</p>
        </div>
      </section>

      {OFFICER_SECTIONS.map((section) => (
        <section key={section.team} className="officers-section section-center">
          <SectionTitle title={section.team} />
          {section.note && <p className="officers-section-note">{section.note}</p>}
          <div className="officers-grid">
            {section.members.map((member) => (
              <OfficerCard key={`${section.team}-${member.role}-${member.name}`} {...member} />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
