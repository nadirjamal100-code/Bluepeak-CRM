import Button from './Button'
import { DEMO_HREF } from '../data/site'

export default function CTASection({
  eyebrow = 'Explore BluePeak CRM',
  title = 'Bring the customer story into focus.',
  text = 'Preview a fictional CRM workflow for customer records, pipeline, and follow-ups. All capabilities are illustrative placeholders.',
  cta = 'Request a CRM preview',
}) {
  return (
    <section id="contact" className="cta on-dark" aria-labelledby="cta-title">
      <div className="container cta__inner">
        <div>
          <p className="eyebrow eyebrow--dark">{eyebrow}</p>
          <h2 id="cta-title">{title}</h2>
          <p className="cta__text">{text}</p>
        </div>
        <Button href={DEMO_HREF} variant="light">
          {cta}
        </Button>
      </div>
    </section>
  )
}
