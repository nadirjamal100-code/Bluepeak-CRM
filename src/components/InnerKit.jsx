import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'

/**
 * Shared building blocks for the inner pages (About, FAQ, Contact, Blog, Platform/Solutions topics).
 * All styling lives in src/styles/inner-pages.css under the `ip-` prefix.
 */

/* Faint topographic rings behind the hero copy. */
function Contours() {
  const rings = Array.from({ length: 10 }, (_, i) => i)
  return (
    <svg className="ip-hero__contours" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {rings.map((i) => (
        <ellipse key={i} cx="1120" cy="250" rx={90 + i * 74} ry={50 + i * 46} />
      ))}
    </svg>
  )
}

/* The "peak" edge: a ridge silhouette that cuts the dark hero into the light page. */
const RIDGE = 'M0 96 L150 62 L260 90 L430 28 L560 72 L720 18 L890 84 L1050 40 L1190 78 L1320 46 L1440 70'

function Ridge() {
  return (
    <svg className="ip-hero__ridge" viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <path className="ip-hero__ridge-fill" d={`${RIDGE} L1440 120 L0 120 Z`} />
      <path className="ip-hero__ridge-line" d={RIDGE} pathLength="1" />
    </svg>
  )
}

/* Splits a plain-text headline into words so each can rise into place (see motion.css). */
function AnimatedTitle({ text }) {
  if (typeof text !== 'string') return text
  const words = text.split(' ')
  return words.map((word, index) => (
    <span key={`${word}-${index}`}>
      <span className="ip-word" style={{ '--w': index }}><span>{word}</span></span>
      {index < words.length - 1 ? ' ' : ''}
    </span>
  ))
}

/**
 * Dark page opener.
 * crumbs: [{ label, to? }]   aside: node shown beside the copy   compact: shorter variant
 */
export function InnerHero({ crumbs = [], title, lead, actions, note, aside, compact = false }) {
  return (
    <section className={`ip-hero on-dark${compact ? ' ip-hero--compact' : ''}`}>
      <Contours />
      <div className="container ip-hero__inner">
        <div className={`ip-hero__grid${aside ? ' ip-hero__grid--aside' : ''}`}>
          <div className="ip-hero__copy">
            {crumbs.length > 0 && (
              <nav className="ip-hero__crumbs" aria-label="Breadcrumb">
                {crumbs.map((crumb, index) => (
                  <span key={crumb.label} className="ip-hero__crumb">
                    {index > 0 && <span className="ip-hero__crumb-sep" aria-hidden="true">/</span>}
                    {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span aria-current={index === crumbs.length - 1 ? 'page' : undefined}>{crumb.label}</span>}
                  </span>
                ))}
              </nav>
            )}
            <h1 className="ip-hero__title"><AnimatedTitle text={title} /></h1>
            {lead && <p className="ip-hero__lead">{lead}</p>}
            {actions && <div className="ip-hero__actions">{actions}</div>}
            {note && <p className="ip-hero__note">{note}</p>}
          </div>
          {aside && <div className="ip-hero__aside">{aside}</div>}
        </div>
      </div>
      <Ridge />
    </section>
  )
}

function SectionHead({ id, title, lead, tone = 'light' }) {
  return (
    <div className={`ip-head ip-head--${tone}`}>
      <h2 className="ip-h2" id={id}>{title}</h2>
      {lead && <p className="ip-lead">{lead}</p>}
    </div>
  )
}

/**
 * Benefits as a ledger: a sticky heading on the left, hairline-separated rows on the right.
 * items: [{ icon: IconComponent, title, text }]
 */
export function Ledger({ id, title, lead, items, action }) {
  return (
    <section className="ip-section ip-ledger" aria-labelledby={id}>
      <div className="container ip-ledger__grid">
        <div className="ip-ledger__intro">
          <h2 className="ip-h2" id={id}>{title}</h2>
          {lead && <p className="ip-lead">{lead}</p>}
          {action && <div className="ip-ledger__action">{action}</div>}
        </div>
        <ul className="ip-ledger__rows">
          {items.map(({ icon: Icon, title: rowTitle, text }) => (
            <li className="ip-row" key={rowTitle}>
              {Icon && <span className="ip-row__icon"><Icon size={22} /></span>}
              <div>
                <h3 className="ip-row__title">{rowTitle}</h3>
                <p className="ip-row__text">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/**
 * Everyday moments along a trail: a rule with a marker above each column.
 * items: [[label, title, text]]
 */
export function Moments({ id, title, lead, items }) {
  return (
    <section className="ip-section ip-section--white ip-moments" aria-labelledby={id}>
      <div className="container">
        <SectionHead id={id} title={title} lead={lead} />
        <div className="ip-moments__grid">
          {items.map(([label, itemTitle, text]) => (
            <article className="ip-moment" key={itemTitle}>
              <p className="ip-moment__label">{label}</p>
              <h3 className="ip-moment__title">{itemTitle}</h3>
              <p className="ip-moment__text">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * A real sequence, drawn as a rising staircase.
 * items: [[number, title, text]]
 */
export function Ascent({ id, title, items, action }) {
  return (
    <section className="ip-ascent on-dark" aria-labelledby={id}>
      <div className="container">
        <div className="ip-ascent__head">
          <h2 className="ip-h2 ip-h2--dark" id={id}>{title}</h2>
          {action && <div className="ip-ascent__action">{action}</div>}
        </div>
        <ol className="ip-ascent__steps">
          {items.map(([number, stepTitle, text]) => (
            <li className="ip-step" key={number}>
              <span className="ip-step__number" aria-hidden="true">{number}</span>
              <h3 className="ip-step__title"><span className="sr-only">Step {Number(number)}: </span>{stepTitle}</h3>
              <p className="ip-step__text">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/**
 * Large, scannable links to other pages.
 * items: [{ to, kind, title, text? }]
 */
export function LinkRows({ id, title, lead, items }) {
  return (
    <section className="ip-section ip-links" aria-labelledby={id}>
      <div className="container">
        <SectionHead id={id} title={title} lead={lead} />
        <div className="ip-links__list">
          {items.map((item) => (
            <Link className="ip-linkrow" to={item.to} key={item.to}>
              {item.kind && <span className="ip-linkrow__kind">{item.kind}</span>}
              <span className="ip-linkrow__title">{item.title}</span>
              {item.text && <span className="ip-linkrow__text">{item.text}</span>}
              <span className="ip-linkrow__arrow" aria-hidden="true"><ArrowRight size={20} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
