import { NavLink } from 'react-router-dom'
import logo from '../assets/logos/shpelogo.jpg'
import heroPhoto from '../assets/home/HomePic.jpg'
import statsPhoto from '../assets/home/Homepic2.jpg'
import lookingAheadPhoto from '../assets/home/Homepic3.jpg'
import recognitionPhoto from '../assets/home/homepage4.jpg'
import majorsChart from '../assets/charts/demographics.jpg'
import yearChart from '../assets/charts/demographics2.png'
import SectionTitle from '../components/ui/SectionTitle'
import GradientImage from '../components/ui/GradientImage'
import './Home.css'

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="home-hero">
        <img src={heroPhoto} alt="SHPE at UIC members" className="home-hero-img" />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <img src={logo} alt="SHPE at UIC logo" className="home-hero-logo" />
          <h1>SHPE at UIC</h1>
          <p>2026 National Chapter</p>
        </div>
      </section>

      {/* Lead paragraph */}
      <section className="home-lead section-center">
        <p>
          SHPE at the University of Illinois Chicago is a student-led community built on
          mentorship, collaboration, and a shared commitment to creating opportunity in STEM. As
          part of the nation&rsquo;s largest Hispanic STEM organization, our chapter supports
          students not only in their professional development, but in finding belonging,
          confidence, and purpose within engineering.
        </p>
      </section>

      {/* Alternating text/photo rows */}
      <section className="home-row section-center">
        <div className="home-row-text">
          <p>
            <strong>Our strength comes from the way we work together.</strong> With{' '}
            <strong>100+ paid members</strong>, SHPE UIC hosted <strong>60+ events</strong> last
            semester with an average <strong>General Body Meeting attendance of 50+ members</strong>,
            creating consistent, high-quality engagement. Last semester, we hosted{' '}
            <strong>27 collaborative events</strong>, partnering with institutions such as IIT,
            Northwestern, and DePaul, as well as campus organizations including ALPFA, Latinos
            Unidos, and others. Together, these programs provide sponsors with repeated,
            meaningful touchpoints with a diverse and motivated engineering student population.
          </p>
        </div>
        <GradientImage src={statsPhoto} alt="SHPE UIC members gathered outside" className="home-row-photo" />
      </section>

      <section className="home-row home-row-reverse section-center">
        <GradientImage
          src={lookingAheadPhoto}
          alt="SHPE UIC officers presenting at a General Body Meeting"
          className="home-row-photo"
        />
        <div className="home-row-text">
          <p>
            Looking ahead, our chapter is focused on expanding access to national opportunities,
            growing and retaining our membership, and strengthening campus and regional
            collaboration, ensuring our members are technically prepared, professionally
            polished, and leadership-driven.
          </p>
        </div>
      </section>

      <section className="home-row section-center">
        <div className="home-row-text">
          <p>
            Recognized as a <strong>Gold Chapter (1 of 4 nationwide)</strong> and a{' '}
            <strong>Region 6 Outstanding Chapter</strong>, SHPE UIC continues to grow through
            intentional leadership and meaningful partnerships.{' '}
            <strong>
              Through sponsorship, companies gain direct access to engaged engineering talent,
              increased brand visibility across campus and regional networks, and the opportunity
              to build long-term recruiting pipelines rooted in community and impact.
            </strong>
          </p>
          <p className="home-row-tagline">
            At SHPE UIC, we believe in lifting as we rise. Together, we are shaping the next
            generation of leaders in STEM.
          </p>
        </div>
        <GradientImage
          src={recognitionPhoto}
          alt="SHPE UIC members at a community event"
          className="home-row-photo"
        />
      </section>

      {/* Demographics */}
      <section className="home-demographics section-muted">
        <div className="section-center">
          <SectionTitle title="Demographics" />
          <div className="home-demographics-charts">
            <img src={majorsChart} alt="Chapter demographics: breakdown of members by major" />
            <img src={yearChart} alt="Chapter demographics: breakdown of members by year in school" />
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="home-newsletter section-dark">
        <div className="section-center home-newsletter-inner">
          <h2>Come to our newsletter</h2>
          <NavLink to="/newsletter" className="btn btn-primary">
            Subscribe
          </NavLink>
        </div>
      </section>
    </main>
  )
}
