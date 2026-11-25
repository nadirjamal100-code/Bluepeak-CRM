import usePageMeta from '../hooks/usePageMeta'
import { Link } from 'react-router-dom'
import Mission from '../sections/Mission'
import Timeline from '../sections/Timeline'
import CRMViews from '../sections/CRMViews'
import FAQSection from '../sections/FAQSection'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import { InnerHero, Ledger, Ascent } from '../components/InnerKit'
import { Layers, Chart, Shield } from '../components/Icons'

const mapNodes = [
  { label: 'Context', x: 92, y: 88 },
  { label: 'People', x: 388, y: 104 },
  { label: 'Activity', x: 84, y: 322 },
  { label: 'Next step', x: 396, y: 312 },
]

/* One relationship at the centre; everything the team needs around it. */
function RelationshipMap() {
  return (
    <figure className="ip-map">
      <svg viewBox="0 0 480 420" role="img" aria-label="A customer relationship at the centre, connected to context, people, activity and the next step">
        {[64, 104, 146, 190].map((r) => <circle key={r} className="ip-map__ring" cx="240" cy="210" r={r} />)}
        {mapNodes.map((node) => <line key={node.label} className="ip-map__link" x1="240" y1="210" x2={node.x} y2={node.y} />)}
        <circle className="ip-map__core-halo" cx="240" cy="210" r="46" />
        <circle className="ip-map__core" cx="240" cy="210" r="34" />
        <text className="ip-map__core-text" x="240" y="216" textAnchor="middle">BP</text>
        {mapNodes.map((node) => (
          <g key={node.label} transform={`translate(${node.x - 58} ${node.y - 20})`}>
            <rect className="ip-map__node" width="116" height="40" rx="20" />
            <circle className="ip-map__node-dot" cx="22" cy="20" r="5" />
            <text className="ip-map__node-text" x="38" y="25">{node.label}</text>
          </g>
        ))}
      </svg>
      <figcaption className="ip-map__caption">One relationship. Every detail connected.</figcaption>
    </figure>
  )
}

const principles = [
  { icon: Layers, title: 'Make context visible', text: 'Keep the customer story, recent conversations, and next action together.' },
  { icon: Chart, title: 'Give the team a shared view', text: 'Make ownership and progress easier for teammates to understand.' },
  { icon: Shield, title: 'Keep the next step clear', text: 'Turn a good conversation into a practical follow-up the team can see.' },
]

const workflow = [
  ['01', 'Understand', 'People, notes, and recent history'],
  ['02', 'Coordinate', 'Ownership, opportunity, and activity'],
  ['03', 'Follow through', 'One clear next customer action'],
]

export default function About() {
  usePageMeta({
    title: 'About BluePeak CRM | Sample Preview',
    description: 'See how a fictional CRM can connect customer context, pipeline stages, and follow-up activity.',
    path: '/about',
  })

  return (
    <div className="ip">
      <InnerHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        title="A clearer view of every customer relationship."
        lead="BluePeak is a fictional CRM concept showing how customer records, pipeline progress, and follow-up work can fit together."
        actions={
          <>
            <Button to="/platform/customer-records" variant="light">Explore the platform</Button>
            <Link className="ip-textlink ip-textlink--light" to="/contact">Talk with the team</Link>
          </>
        }
        note="Illustrative product concept. Sample content only."
        aside={<RelationshipMap />}
      />
      <Mission showAccounts={false} />
      <Ledger
        id="about-principles-title"
        title="A CRM preview built around the relationship."
        lead="This concept brings customer context, team coordination, and follow-through into one connected story."
        items={principles}
      />
      <Ascent
        id="about-workflow-title"
        title="From the first note to the next conversation."
        items={workflow}
        action={<Button to="/platform/customer-records" variant="light">Explore customer records</Button>}
      />
      <Timeline />
      <CRMViews />
      <CTASection />
      <FAQSection />
    </div>
  )
}
