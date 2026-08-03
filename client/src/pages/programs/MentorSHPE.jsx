import heroPhoto from '../../assets/programs/mentorshpe.jpg'
import sharktankPhoto from '../../assets/programs/mentorshpe2.jpg'
import GradientImage from '../../components/ui/GradientImage'
import './Programs.css'

export default function MentorSHPE() {
  return (
    <main className="program">
      <section className="program-hero-photo">
        <img src={heroPhoto} alt="MentorSHPE kickoff, mentors and mentees meeting" className="program-hero-photo-img" />
        <div className="program-hero-photo-overlay" />
        <div className="program-hero-photo-content">
          <h1>MentorSHPE</h1>
          <p>Pairing upperclassmen mentors with underclassmen mentees each semester.</p>
        </div>
      </section>

      <section className="program-lead section-center">
        <p>
          Every semester, our chapter begins another season of the MentorSHPE program through an
          initial kickoff where upperclassmen pair with underclassmen as mentors and mentees. The
          program is one of the chapter&rsquo;s staple initiatives as it provides the chance for
          new members to actively participate in the chapter and learn from their mentors. It also
          provides well-established members the opportunity to foster growth and give back.
        </p>
      </section>

      <section className="program-row section-center">
        <div className="program-row-text">
          <h2 className="program-row-heading">SHPE Sharktank</h2>
          <p>
            We make the mentors pitch themselves &mdash; you&rsquo;ll learn their major and
            interests, and it helps not just us choose who gets paired, but who the mentees like,
            in order to have the best pairing. The way it works is they pitch themselves, and on a
            piece of paper the mentees will name their top 3 members that they liked, which helps
            us pair everyone. Although not everyone gets their first choice, it helps connect with
            others in the SHPE familia.
          </p>
        </div>
        <GradientImage
          src={sharktankPhoto}
          alt="SHPE Sharktank, mentors pitching themselves to mentees"
          variant="orange"
          className="program-row-photo"
        />
      </section>
    </main>
  )
}
