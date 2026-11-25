import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { crmViews } from '../data/site'

export default function CRMViews({ soft = false }) {
  return (
    <section className={`section crm-views${soft ? ' section--soft' : ''}`} aria-labelledby="crm-views-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="crm-views-title"
            eyebrow="Inside the CRM"
            title="Three views, one customer story."
            intro="Explore illustrative screens for contacts, opportunities, and activities. All names and workflows are sample content."
          />
        </Reveal>
        <div className="grid grid--3">
          {crmViews.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <ServiceCard icon={item.icon} tag={item.tag} title={item.title} text={item.text} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
