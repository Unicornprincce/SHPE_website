import { FaRegCalendar } from 'react-icons/fa6'
import './Calendar.css'

export default function Calendar() {
  return (
    <main className="calendar-page">
      <section className="calendar-hero section-dark">
        <div className="section-center calendar-hero-inner">
          <h1>Calendar</h1>
          <p>All of our upcoming events, in one place.</p>
        </div>
      </section>

      <section className="calendar-section section-center">
        <div className="calendar-embed-placeholder">
          <FaRegCalendar aria-hidden="true" className="calendar-embed-icon" />
          <p className="calendar-embed-title">Calendar embed coming soon</p>
          <p className="calendar-embed-note">
            This spot is reserved for our shared Google Calendar &mdash; a full month view that
            board members will be able to update directly, no code required.
          </p>
        </div>
      </section>
    </main>
  )
}
