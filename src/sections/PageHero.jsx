export default function PageHero({ eyebrow, title, intro, className = '' }) {
  return (
    <section className={`page-hero on-dark ${className}`.trim()}>
      <div className="container">
        {eyebrow && <p className="eyebrow eyebrow--dark">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="page-hero__lead">{intro}</p>}
      </div>
    </section>
  )
}
