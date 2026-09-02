import { useEffect, useState } from 'react'
import './Calendar.css'

const CALENDAR_ID =
  'NTE4MWNkNjk1ZGFhY2RhMTk1NDE5ZjU0OTQzMjg5ZDgwODMwZjJkZjFkYzk5MmU2MTRhMzBjOGEzNGNlZTE0N0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t'
const MOBILE_QUERY = '(max-width: 640px)'

function embedUrl(mode) {
  return `https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&mode=${mode}&src=${CALENDAR_ID}&color=%233f51b5`
}

export default function Calendar() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  )

  // Google's month grid is unreadable on phones, so fall back to the agenda list
  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const handleChange = (event) => setIsMobile(event.matches)
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [])

  return (
    <main className="calendar-page">
      <section className="calendar-hero section-dark">
        <div className="section-center calendar-hero-inner">
          <h1>Calendar</h1>
          <p>All of our upcoming events, in one place.</p>
        </div>
      </section>

      <section className="calendar-section section-center">
        <div className="calendar-embed">
          <iframe
            src={embedUrl(isMobile ? 'AGENDA' : 'MONTH')}
            title="SHPE at UIC events calendar"
            className="calendar-embed-frame"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  )
}
