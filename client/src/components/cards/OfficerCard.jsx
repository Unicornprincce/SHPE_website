import { FaEnvelope } from 'react-icons/fa6'
import './OfficerCard.css'

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}

export default function OfficerCard({ name, role, email, photo }) {
  return (
    <div className="officer-card">
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
      <p className="officer-card-role">{role}</p>
      {email && (
        <a
          className="officer-card-email"
          href={`mailto:${email}`}
          aria-label={`Email ${name}`}
        >
          <FaEnvelope aria-hidden="true" />
          <span>{email}</span>
        </a>
      )}
    </div>
  )
}
