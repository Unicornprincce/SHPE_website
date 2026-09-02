import logo from '../assets/logos/SHPE_logo_horiz_University of Illinois at Chicago_PMS.png'
import heroPhoto from '../assets/home/HomePic.jpg'
import statsPhoto from '../assets/home/Homepic2.jpg'
import lookingAheadPhoto from '../assets/home/Homepic3.jpg'
import recognitionPhoto from '../assets/home/homepage4.jpg'
import SectionTitle from '../components/ui/SectionTitle'
import GradientImage from '../components/ui/GradientImage'
import BarChart from '../components/ui/BarChart'
import './Home.css'

const SURVEY_RESPONSES = 27

// Ranked highest to lowest
const MAJORS = [
  { label: 'Mechanical Engineering', value: 6 },
  { label: 'Computer Engineering', value: 5 },
  { label: 'Electrical Engineering', value: 4 },
  { label: 'Civil Engineering', value: 4 },
  { label: 'Computer Science', value: 3 },
  { label: 'Biomedical Engineering', value: 2 },
  { label: 'Industrial Engineering', value: 1 },
  { label: 'Environmental Engineering', value: 1 },
  { label: 'Other', value: 1 },
]

// Kept in class order rather than ranked
const YEARS = [
  { label: 'Freshman', value: 5 },
  { label: 'Sophomore', value: 13 },
  { label: 'Junior', value: 6 },
  { label: 'Senior', value: 3 },
]

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="home-hero">
        <img src={heroPhoto} alt="SHPE at UIC members" className="home-hero-img" />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <span className="logo-chip home-hero-logo-chip">
            <img src={logo} alt="SHPE at UIC logo" className="home-hero-logo" />
          </span>
          <h1>SHPE at UIC</h1>
          <p>2026 Student Chapter</p>
        </div>
      </section>

      {/* Lead paragraph */}
      <section className="home-lead section-center">
        <h2 className="home-lead-heading">Who We Are</h2>
        <p>
          SHPE at the University of Illinois Chicago is a student-led community built on
          mentorship, collaboration, and a shared commitment to creating opportunity in STEM. As
          part of the nation&rsquo;s largest Hispanic STEM organization, our chapter supports
          students not only in their professional development, but in finding belonging,
          confidence, and purpose within engineering.
        </p>
      </section>

      {/* Full-bleed alternating panels */}
      <section className="home-panel-row home-panel-navy">
        <div className="home-panel-text">
          <h2 className="home-panel-heading">Our Strength</h2>
          <p>
            Our strength comes from the way we work together. With 100+ paid members, SHPE UIC
            hosted 60+ events last semester with an average General Body Meeting attendance of
            50+ members, creating consistent, high-quality engagement. Last semester, we hosted
            27 collaborative events, partnering with institutions such as IIT, Northwestern, and
            DePaul, as well as campus organizations including ALPFA, Latinos Unidos, and others.
            Together, these programs provide sponsors with repeated, meaningful touchpoints with a
            diverse and motivated engineering student population.
          </p>
        </div>
        <GradientImage
          src={statsPhoto}
          alt="SHPE UIC members gathered outside"
          bleed
          className="home-panel-photo"
        />
      </section>

      <section className="home-panel-row home-panel-white home-panel-row-reverse">
        <GradientImage
          src={lookingAheadPhoto}
          alt="SHPE UIC officers presenting at a General Body Meeting"
          bleed
          className="home-panel-photo"
        />
        <div className="home-panel-text">
          <h2 className="home-panel-heading">Looking Ahead</h2>
          <p>
            Looking ahead, our chapter is focused on expanding access to national opportunities,
            growing and retaining our membership, and strengthening campus and regional
            collaboration, ensuring our members are technically prepared, professionally
            polished, and leadership-driven.
          </p>
        </div>
      </section>

      <section className="home-panel-row home-panel-orange">
        <div className="home-panel-text">
          <h2 className="home-panel-heading">Recognition &amp; Impact</h2>
          <p>
            Recognized as a Gold Chapter (1 of 4 nationwide) and a Region 6 Outstanding Chapter,
            SHPE UIC continues to grow through intentional leadership and meaningful partnerships.
            Through sponsorship, companies gain direct access to engaged engineering talent,
            increased brand visibility across campus and regional networks, and the opportunity to
            build long-term recruiting pipelines rooted in community and impact.
          </p>
          <p className="home-panel-tagline">
            At SHPE UIC, we believe in lifting as we rise. Together, we are shaping the next
            generation of leaders in STEM.
          </p>
        </div>
        <GradientImage
          src={recognitionPhoto}
          alt="SHPE UIC members at a community event"
          bleed
          className="home-panel-photo"
        />
      </section>

      {/* Demographics */}
      <section className="home-demographics section-muted">
        <div className="section-center">
          <SectionTitle title="Demographics" />
          <div className="home-demographics-charts">
            <BarChart
              question="What is your major?"
              responses={SURVEY_RESPONSES}
              data={MAJORS}
              variant="blue"
            />
            <BarChart
              question="What year are you in school?"
              responses={SURVEY_RESPONSES}
              data={YEARS}
              variant="orange"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
