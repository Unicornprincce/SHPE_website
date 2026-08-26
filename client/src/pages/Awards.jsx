import { AWARDS } from '../data/awards'
import './Awards.css'

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}

export default function Awards() {
  const cards = AWARDS.flatMap((entry) =>
    entry.recipients.map((recipient) => ({
      ...recipient,
      award: entry.award,
      link: entry.link,
    }))
  )

  return (
    <main className="awards">
      <section className="awards-hero section-dark">
        <div className="section-center awards-hero-inner">
          <h1>Awards</h1>
          <p>Celebrating our members&rsquo; accomplishments, on and off campus.</p>
        </div>
      </section>

      <section className="awards-section section-center">
        <div className="awards-grid">
          {cards.map((card) => (
            <div className="award-card" key={`${card.award}-${card.name}`}>
              <h3 className="award-card-title">{card.award}</h3>
              <div className="award-card-photo">
                {card.photo ? (
                  <img src={card.photo} alt={card.name} loading="lazy" />
                ) : (
                  <div className="award-card-initials" aria-hidden="true">
                    {getInitials(card.name)}
                  </div>
                )}
              </div>
              <p className="award-card-name">{card.name}</p>
              {card.link && (
                <a
                  className="award-card-link"
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View award &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
