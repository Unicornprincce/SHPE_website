export default function SectionTitle({ eyebrow, title, className = '' }) {
  return (
    <div className={`section-title ${className}`.trim()}>
      {eyebrow && <span className="section-title-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
    </div>
  )
}
