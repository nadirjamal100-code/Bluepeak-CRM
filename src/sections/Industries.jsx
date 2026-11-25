import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { industries } from '../data/site'

export default function Industries() {
  return (
    <section id="industries" className="section section--soft industries-section" aria-labelledby="industries-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="industries-title"
            eyebrow="Who it is for"
            title="A CRM shaped around the way teams work."
            intro="These fictional examples show how different teams could organize customer context and follow-through."
          />
        </Reveal>
        <div className="grid grid--4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 60}>
              <ServiceCard icon={ind.icon} title={ind.name} text={ind.text} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
