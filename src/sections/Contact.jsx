import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import CopyEmail from '../components/CopyEmail'
import { DEMO_HREF } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="section section--soft" aria-labelledby="contact-title">
      <div className="container split">
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact the sample team"
            title="Take a closer look at the CRM preview."
            intro="This fictional product demo uses a reserved example email address. Replace it with a verified contact before publishing."
          />
        </Reveal>
        <Reveal delay={80} className="contact__card">
          <p className="prose__label">CRM preview inbox</p>
          <CopyEmail className="copy-email--lg" />
          <Button href={DEMO_HREF}>Request a CRM preview</Button>
        </Reveal>
      </div>
    </section>
  )
}
