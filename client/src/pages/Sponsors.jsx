import SectionTitle from '../components/ui/SectionTitle'
import './Sponsors.css'

const WHY_SPONSOR = [
  '100+ paid members and 60+ events hosted last semester alone.',
  'Recognized as a Gold Chapter (1 of 4 nationwide) and a Region 6 Outstanding Chapter.',
  'Direct access to engaged, motivated Latino engineering talent.',
  'Build long-term recruiting pipelines rooted in community and impact.',
]

export default function Sponsors() {
  return (
    <main className="sponsors">
      <section className="sponsors-hero section-dark">
        <div className="section-center sponsors-hero-inner">
          <h1>Sponsor SHPE at UIC!</h1>
          <p>Partner with the Society of Hispanic Professional Engineers Student Chapter at UIC.</p>
        </div>
      </section>

      <section className="sponsors-lead section-center">
        <p>
          Here at UIC SHPE, we strive to get the best out of being Latino students in engineering.
          With your sponsorship, we&rsquo;re able to host more events in a professional setting,
          provide giveaways, and create opportunities that help our members grow into confident,
          career-ready engineers.
        </p>
      </section>

      <section className="sponsors-package section-muted">
        <div className="section-center sponsors-package-inner">
          <SectionTitle eyebrow="Sponsorship Details" title="Access Our Partnership Package" />
          <p>
            Take a look at our full partnership package for sponsorship levels, benefits, and
            everything your company needs to know about partnering with us.
          </p>
          <a
            className="btn btn-primary"
            href="https://drive.google.com/file/d/122qip-BGBRxL2qKuhX5ZuNlGl4FuyXxU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Partnership Package
          </a>
        </div>
      </section>

      <section className="sponsors-why section-center">
        <SectionTitle eyebrow="Why Sponsor Us" title="What Your Partnership Makes Possible" />
        <div className="sponsors-why-grid">
          {WHY_SPONSOR.map((item) => (
            <p className="sponsors-why-item" key={item}>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="sponsors-cta section-dark">
        <div className="section-center sponsors-cta-inner">
          <h2>Ready to Partner With Us?</h2>
          <p>Reach out to our External Vice President and we&rsquo;ll follow up!</p>
          <a className="btn btn-primary" href="mailto:externalvp.shpe.uic@gmail.com">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}
