import usePageMeta from '../hooks/usePageMeta'
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import { InnerHero, Ledger } from '../components/InnerKit'
import { Mail, Layers, Check } from '../components/Icons'

const nextSteps = [
  { icon: Mail, title: 'Tell us what you need', text: 'Add your details and write a short message.' },
  { icon: Check, title: 'Review before sending', text: 'Your email app opens with the message filled in. Edit it, then send.' },
  { icon: Layers, title: 'Explore while you wait', text: 'Browse the platform pages for a closer look at the sample workflow.' },
]

export default function ContactPage() {
  usePageMeta({
    title: 'Contact BluePeak | CRM Preview',
    description: 'Get in touch about the illustrative BluePeak CRM preview.',
    path: '/contact',
  })

  return (
    <div className="ip">
      <InnerHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        title="Let’s explore a clearer customer story."
        lead="Questions about the BluePeak CRM preview? Send a note to the sample team or request a closer look."
        note="BluePeak is a fictional CRM concept. The sample inbox and product details are placeholders for this website preview."
        aside={<ContactForm />}
      />
      <Ledger
        id="contact-next-title"
        title="A simple path to the preview."
        lead="Three small steps from first message to a closer look at the sample workflow."
        items={nextSteps}
        action={<Button to="/platform/customer-records" variant="outline">Explore customer records</Button>}
      />
    </div>
  )
}
