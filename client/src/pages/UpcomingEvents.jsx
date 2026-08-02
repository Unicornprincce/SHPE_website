import heroBg from '../assets/hero.png'
import './UpcomingEvents.css'

const events = [
  {
    id: 1,
    type: 'Professional',
    date: { month: 'JUN', day: '10' },
    title: 'Resume & LinkedIn Workshop',
    description: 'Get your resume reviewed by industry professionals and optimize your LinkedIn profile for recruiting season.',
    time: '5:00 PM – 7:00 PM',
    location: 'SEO 1000, UIC',
    tag: 'Workshop',
  },
  {
    id: 2,
    type: 'Social',
    date: { month: 'JUN', day: '18' },
    title: 'End of Year Social Mixer',
    description: 'Celebrate the semester with fellow SHPE members. Food, games, and great company — everyone welcome!',
    time: '6:00 PM – 9:00 PM',
    location: 'UIC Student Center',
    tag: 'Social',
  },
  {
    id: 3,
    type: 'Professional',
    date: { month: 'JUL', day: '5' },
    title: 'Industry Panel: Careers in Engineering',
    description: 'Hear from engineers at top companies about their career paths, internship advice, and what they look for in candidates.',
    time: '4:00 PM – 6:30 PM',
    location: 'Virtual (Zoom)',
    tag: 'Panel',
  },
  {
    id: 4,
    type: 'Conference',
    date: { month: 'JUL', day: '22' },
    title: 'SHPE Regional Conference',
    description: 'Join SHPE members from across the region for workshops, networking, career fairs, and chapter competitions.',
    time: 'All Day',
    location: 'TBD',
    tag: 'Conference',
  },
  {
    id: 5,
    type: 'Professional',
    date: { month: 'AUG', day: '14' },
    title: 'Fall Semester Kickoff & Info Night',
    description: 'Start the new semester with SHPE! Learn about membership, upcoming events, and meet your new board.',
    time: '5:30 PM – 7:30 PM',
    location: 'SES 2100, UIC',
    tag: 'Meeting',
  },
  {
    id: 6,
    type: 'Social',
    date: { month: 'AUG', day: '28' },
    title: 'Back to School Networking Dinner',
    description: 'Build connections with peers and alumni over dinner. Share your summer experience and plan for the semester ahead.',
    time: '6:00 PM – 8:30 PM',
    location: 'UIC Campus',
    tag: 'Networking',
  },
]

const tagColors = {
  Workshop: { bg: '#e8f0fe', color: '#1a56d6' },
  Social: { bg: '#fdf0e0', color: '#b45309' },
  Panel: { bg: '#f0fdf4', color: '#166534' },
  Conference: { bg: '#fef2f2', color: '#991b1b' },
  Meeting: { bg: '#f5f3ff', color: '#6d28d9' },
  Networking: { bg: '#ecfdf5', color: '#065f46' },
}

export default function UpcomingEvents() {
  return (
    <main className="events-page">
      {/* Page Header */}
      <section
        className="events-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="events-hero-overlay" />
        <div className="events-hero-content">
          <p className="events-eyebrow">Stay in the Loop</p>
          <h1>UPCOMING EVENTS</h1>
          <p className="events-hero-sub">
            From professional workshops to social gatherings — there's always something happening at SHPE UIC.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="events-section">
        <div className="events-inner">
          <div className="events-grid">
            {events.map(e => {
              const tagStyle = tagColors[e.tag] || { bg: '#f0f2f5', color: '#4a4a4a' }
              return (
                <article className="event-card" key={e.id}>
                  <div className="event-date-block">
                    <span className="event-month">{e.date.month}</span>
                    <span className="event-day">{e.date.day}</span>
                  </div>
                  <div className="event-body">
                    <div className="event-meta">
                      <span
                        className="event-tag"
                        style={{ background: tagStyle.bg, color: tagStyle.color }}
                      >
                        {e.tag}
                      </span>
                    </div>
                    <h3 className="event-title">{e.title}</h3>
                    <p className="event-desc">{e.description}</p>
                    <div className="event-details">
                      <span className="event-detail">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
                        {e.time}
                      </span>
                      <span className="event-detail">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                        {e.location}
                      </span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
