import { useState } from 'react'
import { TECHNICAL_TEAMS } from '../../data/leadership'
import OfficerCard from '../../components/cards/OfficerCard'
import SectionTitle from '../../components/ui/SectionTitle'
import LeadershipHero from './LeadershipHero'
import './Leadership.css'
import './TechnicalTeams.css'

export default function TechnicalTeams() {
  const [activeKey, setActiveKey] = useState(TECHNICAL_TEAMS[0].key)
  const activeTeam = TECHNICAL_TEAMS.find((team) => team.key === activeKey) ?? TECHNICAL_TEAMS[0]

  return (
    <main className="technical-teams">
      <LeadershipHero />

      <section className="leadership-section section-center">
        <div className="technical-teams-tabs" role="tablist" aria-label="Technical Teams">
          {TECHNICAL_TEAMS.map((team) => (
            <button
              key={team.key}
              type="button"
              role="tab"
              aria-selected={team.key === activeKey}
              className={`technical-teams-tab${team.key === activeKey ? ' active' : ''}`}
              onClick={() => setActiveKey(team.key)}
            >
              {team.label}
            </button>
          ))}
        </div>

        <SectionTitle title={activeTeam.label} className="technical-teams-title" />

        <p className="leadership-subheading">Leads</p>
        <div className="leadership-grid">
          {activeTeam.leads.map((member) => (
            <OfficerCard key={`${activeTeam.key}-${member.role}-${member.name}`} {...member} />
          ))}
        </div>

        {(activeTeam.members.length > 0 || activeTeam.membersNote) && (
          <>
            <p className="leadership-subheading">Members</p>
            {activeTeam.members.length > 0 ? (
              <>
                <div className="leadership-grid">
                  {activeTeam.members.map((member) => (
                    <OfficerCard key={`${activeTeam.key}-member-${member.name}`} {...member} />
                  ))}
                </div>
                {activeTeam.membersNote && (
                  <p className="technical-teams-members-note">{activeTeam.membersNote}</p>
                )}
              </>
            ) : (
              <div className="technical-teams-members-slot">
                <p>{activeTeam.membersNote}</p>
              </div>
            )}
          </>
        )}

        {activeTeam.pastContributors.length > 0 && (
          <>
            <p className="leadership-subheading">Past Contributors</p>
            <div className="leadership-grid">
              {activeTeam.pastContributors.map((member) => (
                <OfficerCard key={`${activeTeam.key}-past-${member.name}`} {...member} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  )
}
