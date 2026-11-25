import { iconMap } from './Icons'

/** Static info card (product or industry). Not interactive, so it is not a link. */
export default function ServiceCard({ icon, title, tag, text, className = '', tabIndex, children }) {
  const Icon = iconMap[icon]
  return (
    <article className={`card ${className}`.trim()} tabIndex={tabIndex}>
      <span className="card__icon">{Icon && <Icon size={24} />}</span>
      {tag && <p className="card__tag">{tag}</p>}
      <h3>{title}</h3>
      {text && <p className="card__text">{text}</p>}
      {children}
    </article>
  )
}
