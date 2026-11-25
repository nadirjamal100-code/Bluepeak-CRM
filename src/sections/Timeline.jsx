import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { timeline } from '../data/site'

export default function Timeline() {
  return (
    <section className="section section--soft" aria-labelledby="timeline-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="timeline-title"
            eyebrow="A CRM workflow"
            title="From customer context to a clear next step."
          />
        </Reveal>
        <ol className="timeline">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.years} className="timeline__item" delay={i * 60}>
              <span className="timeline__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="timeline__years">{t.years}</p>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
