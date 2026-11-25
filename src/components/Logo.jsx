import { Link } from 'react-router-dom'

export default function Logo({ onDark = false }) {
  return (
    <Link to="/" className={`logo${onDark ? ' logo--plate' : ''}`} aria-label="BluePeak home">
      <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="currentColor" />
        <path
          d="M8.5 28 18 11l5.2 9 3.7-5.8L32 28H8.5Z"
          fill="none"
          stroke="var(--violet-300)"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
      </svg>
      <span className="logo__text">
        Blue<b>Peak</b>
      </span>
      <span className="logo__product" aria-label="Customer relationship management">
        CRM
      </span>
    </Link>
  )
}
