import usePageMeta from '../hooks/usePageMeta'
import Button from '../components/Button'
import { InnerHero } from '../components/InnerKit'
import { Link } from 'react-router-dom'

export default function ComingSoon() {
  usePageMeta({
    title: 'CRM Preview Coming Soon | BluePeak',
    description: 'The BluePeak CRM preview is coming soon. Contact us to ask a question or explore the sample workflow.',
    path: '/coming-soon',
  })

  return (
    <div className="ip">
      <InnerHero
        compact
        crumbs={[{ label: 'Home', to: '/' }, { label: 'CRM preview' }]}
        title="The CRM preview is coming soon."
        lead="We are preparing a closer look at the BluePeak sample workflow. In the meantime, explore the site or send us a question."
        actions={
          <>
            <Button to="/contact" variant="light">Contact us</Button>
            <Link className="ip-textlink ip-textlink--light" to="/faq">Read the FAQ</Link>
          </>
        }
        note="BluePeak is a fictional CRM concept. All product details and workflows are illustrative."
      />
      <div className="coming-soon-spacer" aria-hidden="true" />
    </div>
  )
}
