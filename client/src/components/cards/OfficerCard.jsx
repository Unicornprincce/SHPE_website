import { useEffect, useRef, useState } from 'react'
import { FaEnvelope, FaLinkedin, FaCircleQuestion } from 'react-icons/fa6'
import './OfficerCard.css'

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}

export default function OfficerCard({ name, role, roleColor, email, linkedin, photo, description }) {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    if (!popoverOpen) return undefined

    function handleOutsideEvent(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setPopoverOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') setPopoverOpen(false)
    }

    document.addEventListener('mousedown', handleOutsideEvent)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleOutsideEvent)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [popoverOpen])

  return (
    <div className={`officer-card${popoverOpen ? ' popover-open' : ''}`} ref={cardRef}>
      <div className="officer-card-photo">
        {photo ? (
          <img src={photo} alt={`${name}, ${role}`} loading="lazy" />
        ) : (
          <div className="officer-card-initials" aria-hidden="true">
            {getInitials(name)}
          </div>
        )}
      </div>
      <h3 className="officer-card-name">{name}</h3>
      <p className="officer-card-role" style={roleColor ? { color: roleColor } : undefined}>
        {role}
      </p>

      <div className="officer-card-actions">
        {email ? (
          <a
            className="officer-card-action"
            href={`mailto:${email}`}
            aria-label={`Email ${name}`}
            title={email}
          >
            <FaEnvelope aria-hidden="true" />
          </a>
        ) : (
          <span className="officer-card-action officer-card-action-disabled" aria-hidden="true">
            <FaEnvelope />
          </span>
        )}

        {linkedin ? (
          <a
            className="officer-card-action"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
          >
            <FaLinkedin aria-hidden="true" />
          </a>
        ) : (
          <span className="officer-card-action officer-card-action-disabled" aria-hidden="true">
            <FaLinkedin />
          </span>
        )}

        {description && (
          <button
            type="button"
            className="officer-card-action officer-card-action-button"
            aria-label={`What does ${role} do?`}
            aria-expanded={popoverOpen}
            onClick={() => setPopoverOpen((open) => !open)}
          >
            <FaCircleQuestion aria-hidden="true" />
          </button>
        )}
      </div>

      {popoverOpen && description && (
        <div className="officer-card-popover" role="tooltip">
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}
