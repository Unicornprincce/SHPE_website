import SectionTitle from '../components/ui/SectionTitle'
import './Sponsors.css'

const TIERS = [
  {
    name: 'Bronze',
    price: '$350+',
    accent: 'bronze',
    benefits: ['Logo on event materials', 'Social media shoutout', 'Recognition at one General Body Meeting'],
  },
  {
    name: 'Silver',
    price: '$500+',
    accent: 'silver',
    benefits: ['Everything in Bronze', 'Tabling at one chapter event', 'Logo featured on our sponsors page'],
  },
  {
    name: 'Gold',
    price: '$1,000+',
    accent: 'gold',
    benefits: ['Everything in Silver', 'Company spotlight at a General Body Meeting', 'Priority invite to our recruiting events'],
  },
  {
    name: 'Platinum',
    price: '$1,500+',
    accent: 'platinum',
    benefits: ['Everything in Gold', 'Premier logo placement across all chapter materials', 'Dedicated info session or workshop with our members'],
  },
]

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
          <h1>Wanna Sponsor Us?</h1>
          <p>Partner with UIC&rsquo;s chapter of the nation&rsquo;s largest Hispanic STEM organization.</p>
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

      <section className="sponsors-tiers section-muted">
        <div className="section-center">
          <SectionTitle eyebrow="Sponsorship Pricing" title="Choose Your Tier" />
          <p className="sponsors-tiers-note">
            Draft benefits below &mdash; happy to tailor a package to what works best for your
            company.
          </p>
          <div className="sponsors-tier-grid">
            {TIERS.map((tier) => (
              <div className={`sponsors-tier-card sponsors-tier-${tier.accent}`} key={tier.name}>
                <h3 className="sponsors-tier-name">{tier.name}</h3>
                <p className="sponsors-tier-price">{tier.price}</p>
                <ul className="sponsors-tier-benefits">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
          <p>Reach out to our External Vice President and we&rsquo;ll follow up with a sponsorship packet.</p>
          <a className="btn btn-primary" href="mailto:externalvp.shpe.uic@gmail.com">
            Contact Us
          </a>
          <p className="sponsors-cta-more">
            Or want more information?{' '}
            <a href="mailto:externalvp.shpe.uic@gmail.com">Click here to learn more.</a>
          </p>
        </div>
      </section>
    </main>
  )
}
