import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import { crmHighlights } from '../data/site'

export default function CRMHighlights() {
  return (
    <section className="section crm-highlights on-dark" aria-labelledby="crm-highlights-title">
      <div className="container crm-highlights__container">
        <h2 id="crm-highlights-title" className="sr-only">
          Connected customer workflows
        </h2>
        <div className="grid grid--4 crm-highlights__grid">
          {crmHighlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <ServiceCard
                icon={item.icon}
                tag={item.tag}
                title={item.title}
                text={item.text}
                className="crm-highlight-card"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
