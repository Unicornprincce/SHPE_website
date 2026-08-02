import { Link } from 'react-router-dom'

/**
 * Shared CTA/nav button. Renders a react-router <Link> for internal `to`,
 * or an <a> for external `href`, or a <button> when neither is given.
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn-${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
