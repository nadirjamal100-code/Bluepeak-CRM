import usePageMeta from '../hooks/usePageMeta'
import { faqLd } from '../utils/structuredData'
import FAQSection from '../sections/FAQSection'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import { InnerHero, LinkRows } from '../components/InnerKit'
import { EMAIL } from '../data/site'

const topics = ['Product concept', 'Sample data', 'CRM workflows']

const exploreLinks = [
  { to: '/about', kind: 'About', title: 'About the preview', text: 'Learn what BluePeak represents and how to read the sample workflow.' },
  { to: '/blog', kind: 'Blog', title: 'Ideas and perspectives', text: 'Practical notes about customer context and team follow-up.' },
  { to: '/contact', kind: 'Contact', title: 'Contact the sample team', text: 'Send a question or request a closer look at the preview.' },
]

function FaqAside() {
  return (
    <aside className="ip-glass" aria-labelledby="faq-aside-title">
      <h2 className="ip-glass__title" id="faq-aside-title">Explore the preview with confidence.</h2>
      <ul className="ip-glass__list">
        {topics.map((topic) => <li key={topic}>{topic}</li>)}
      </ul>
      <p className="ip-glass__foot">
        Need something else? <a href={`mailto:${EMAIL}`}>Contact the sample team</a>
      </p>
    </aside>
  )
}

export default function FAQ() {
  usePageMeta({
    title: 'BluePeak CRM FAQ | Sample Preview',
    description: 'Answers about the fictional CRM content, workflows, and data shown in the BluePeak preview.',
    path: '/faq',
    jsonLd: faqLd,
  })

  return (
    <div className="ip">
      <InnerHero
        compact
        crumbs={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
        title="Good questions make for clearer customer work."
        lead="Find quick answers about the sample CRM, the workflows shown, and what is illustrative in this preview."
        actions={<Button href="#faq-title" variant="ghost" icon={false}>Browse the answers</Button>}
        aside={<FaqAside />}
      />
      <FAQSection showAllLink={false} />
      <LinkRows
        id="faq-explore-title"
        title="Find the next useful page."
        lead="Move from quick answers to more detail about the BluePeak sample experience."
        items={exploreLinks}
      />
      <CTASection
        eyebrow="Still exploring?"
        title="See the customer workflow for yourself."
        text="This fictional preview uses sample CRM content and a reserved example email address."
        cta="Request a CRM preview"
      />
    </div>
  )
}
