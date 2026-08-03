/**
 * Reusable photo wrapper with a brand-colored (navy/orange) gradient overlay,
 * matching the treatment used across the hero, Home alternating rows, and
 * later reused on SHPEtinas/MentorSHPE/Officers photos.
 */
export default function GradientImage({ src, alt, variant = 'diagonal', className = '' }) {
  return (
    <div className={`gradient-image gradient-image-${variant} ${className}`.trim()}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}
