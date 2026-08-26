/**
 * Reusable photo wrapper with a brand-colored (navy/orange) gradient overlay,
 * matching the treatment used across the hero, Home alternating rows, and
 * later reused on SHPEtinas/MentorSHPE/Officers photos.
 */
export default function GradientImage({ src, alt, variant = 'diagonal', bleed = false, className = '' }) {
  const classes = [
    'gradient-image',
    `gradient-image-${variant}`,
    bleed && 'gradient-image-bleed',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}
