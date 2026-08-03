import brunchPhoto from '../../assets/programs/SHPEtinas.jpg'
import wissPhoto from '../../assets/programs/WISSshpetinas.png'
import GradientImage from '../../components/ui/GradientImage'
import './Programs.css'

export default function SHPEtinas() {
  return (
    <main className="program">
      <section className="program-hero section-dark">
        <div className="section-center program-hero-inner">
          <h1>SHPEtinas</h1>
          <p>Empowering and supporting women in STEM.</p>
        </div>
      </section>

      <section className="program-lead section-center">
        <p>
          The SHPEtinas program is dedicated to empowering and supporting women in STEM. With
          multiple successful events throughout the school year, the SHPEtinas program is excited
          to continue growing and creating new opportunities.
        </p>
      </section>

      <section className="program-row section-center">
        <div className="program-row-text">
          <p>
            Highlighted events from Fall 2025 and Spring 2026 include the{' '}
            <strong>Chicagoland SHPEtina Brunch</strong>, hosted by Region 6 SHPEtina director and
            made possible at IBM; <strong>Polymer Slime Workshop</strong>, a hands-on activity
            where students learned about chemical reactions; the{' '}
            <strong>Women in STEM Summit</strong>, made for women to network and connect in
            workshops, co-hosted with Northwestern University with attendance of{' '}
            <strong>200+ students, speakers, professionals, and volunteers</strong>.
          </p>
        </div>
        <GradientImage
          src={brunchPhoto}
          alt="Chicagoland SHPEtina Brunch, hosted at IBM"
          variant="orange"
          className="program-row-photo"
        />
      </section>

      <section className="program-row program-row-reverse section-center">
        <GradientImage
          src={wissPhoto}
          alt="Women in STEM Summit, co-hosted with Northwestern University"
          variant="orange"
          className="program-row-photo"
        />
        <div className="program-row-text">
          <p>
            These events were made possible by regional collaboration and local support.
            SHPEtinas continues to elevate and inspire the next generation of Latina engineers.
          </p>
        </div>
      </section>
    </main>
  )
}
