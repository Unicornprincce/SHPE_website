import './Alumni.css'

export default function Alumni() {
  return (
    <main className="alumni">
      <section className="alumni-hero section-dark">
        <div className="section-center alumni-hero-inner">
          <h1>Alumni</h1>
          <p>Once part of SHPE, always part of the familia.</p>
        </div>
      </section>

      <section className="alumni-section section-center">
        <p>
          Alumni, are you interested in being part of SHPE again? No matter how long it&rsquo;s
          been, one year or ten, since you were active in SHPE at UIC, we&rsquo;d
          love to reconnect, hear what you&rsquo;re up to, invite you back for events, and find
          ways to keep our alumni network engaged with current members.
        </p>
        <p>If you&rsquo;re interested, fill out the form below or reach out to our Graduate Ambassador.</p>
        <div className="alumni-buttons">
          <a
            className="btn btn-primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe3alJq6I_zXymUpkCSJy-GpkPYevXNygAHTehqPugqd-D4EQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fill Out the Form
          </a>
          <a className="btn btn-outline-navy" href="mailto:grad.shpe.uic@gmail.com">
            Email Our Graduate Ambassador
          </a>
        </div>
        <p className="alumni-contact-note">
          Kloey Acevedo Bernal, Graduate Ambassador: grad.shpe.uic@gmail.com
        </p>
      </section>
    </main>
  )
}
