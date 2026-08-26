import heroPhoto from '../../assets/programs/DSC04970.JPG'
import groupPhoto from '../../assets/programs/DSC05012.JPG'
import mentorPhoto from '../../assets/programs/DSC04990.JPG'
import GradientImage from '../../components/ui/GradientImage'
import './Programs.css'

export default function DiaDeCiencias() {
  return (
    <main className="program">
      <section className="program-hero-photo">
        <img
          src={heroPhoto}
          alt="SHPE UIC volunteers welcoming students to Dia de Ciencias / Equipando Padres"
          className="program-hero-photo-img"
        />
        <div className="program-hero-photo-overlay" />
        <div className="program-hero-photo-content">
          <h1>Dia de Ciencias</h1>
          <p>Hands-on science for local students and their families.</p>
        </div>
      </section>

      <section className="program-lead section-center">
        <p>
          Dia de Ciencias, or &ldquo;Equipando Padres,&rdquo; is a hands-on science day SHPE UIC
          hosts for local students and their families. Volunteers lead bilingual, interactive
          experiments that make STEM feel approachable from the very first activity, right down to
          the welcome on the chalkboard.
        </p>
      </section>

      <section className="program-row section-center">
        <div className="program-row-text">
          <h2 className="program-row-heading">Hands-On Experiments</h2>
          <p>
            From color-changing chemical reactions to guided experiments with everyday materials,
            students work in small groups to observe, predict, and test results &mdash; building
            comfort with the scientific method through play, not lectures.
          </p>
        </div>
        <GradientImage
          src={groupPhoto}
          alt="Students working together on a hands-on chemistry activity at Dia de Ciencias"
          variant="orange"
          className="program-row-photo"
        />
      </section>

      <section className="program-row program-row-reverse section-center">
        <GradientImage
          src={mentorPhoto}
          alt="A SHPE UIC volunteer guiding a student through a science experiment"
          variant="orange"
          className="program-row-photo"
        />
        <div className="program-row-text">
          <h2 className="program-row-heading">Why It Matters</h2>
          <p>
            This SHPE-hosted event is a way for younger Hispanic students, and any student curious
            about science, to get an early, hands-on introduction to STEM &mdash; guided by
            near-peer mentors from UIC who look like them and speak their language.
          </p>
        </div>
      </section>
    </main>
  )
}
