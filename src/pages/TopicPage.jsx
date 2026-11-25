import { Link, useParams } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import { InnerHero, Ledger, Moments, Ascent, LinkRows } from '../components/InnerKit'
import { innerPages } from '../data/innerPages'
import { DEMO_HREF } from '../data/site'
import { ArrowRight, Chart, Layers, Shield } from '../components/Icons'

const icons = [Layers, Chart, Shield]

function TopicGraphic({ page }) {
  if (page.design === 'pipeline') {
    return <div className="topic-art__kanban">
      {['Explore', 'In progress', 'Review'].map((stage, index) => <div className="topic-art__kanban-column" key={stage}>
        <span>{stage}<i>{index + 2}</i></span>
        <div><b /><em /><small /></div><div><b /><em /></div>
      </div>)}
    </div>
  }
  if (page.design === 'planner') {
    return <div className="topic-art__calendar">
      <div className="topic-art__calendar-head"><strong>Week at a glance</strong><span>‹ &nbsp; Nov 16 – 20 &nbsp; ›</span></div>
      <div className="topic-art__calendar-grid">{['MON','TUE','WED','THU','FRI'].map((day, index) => <div key={day}><small>{day}</small><b>{16 + index}</b><i className={`is-${index + 1}`} /><i /></div>)}</div>
      <p><i /> Customer check-in <span>10:30 AM</span></p><p><i /> Send project recap <span>2:00 PM</span></p>
    </div>
  }
  if (page.design === 'insights') {
    return <div className="topic-art__chart">
      <div className="topic-art__chart-head"><div><span>Team activity</span><strong>Momentum overview</strong></div><small>THIS MONTH</small></div>
      <div className="topic-art__chart-main"><div className="topic-art__chart-y"><i>High</i><i>Mid</i><i>Low</i></div><div className="topic-art__bars">{[42,64,54,77,61,88,70,96,76,85,67,100].map((height, index) => <i key={index} style={{ '--bar-height': `${height}%` }} />)}</div></div>
      <div className="topic-art__chart-legend"><span><i /> Customer activity</span><span><i /> Open opportunities</span></div>
    </div>
  }
  if (page.design === 'sales-teams') {
    return <div className="topic-art__team-board"><div><span>Shared opportunity</span><strong>Northstar account</strong><small>3 teammates · 1 next step</small></div><div className="topic-art__avatars"><i>AM</i><i>JR</i><i>SK</i><b>+2</b></div><div className="topic-art__team-next"><span>UP NEXT</span><strong>Customer review</strong><small>Owner: Jordan R. &nbsp; · &nbsp; Thursday</small></div></div>
  }
  if (page.design === 'consulting') {
    return <div className="topic-art__client-map"><div className="topic-art__client-core"><b>Client<br />relationship</b></div><span className="topic-art__client-node topic-art__client-node--one">Stakeholders</span><span className="topic-art__client-node topic-art__client-node--two">Engagements</span><span className="topic-art__client-node topic-art__client-node--three">Conversations</span><i /><i /><i /></div>
  }
  if (page.design === 'creative') {
    return <div className="topic-art__creative-board"><div className="topic-art__creative-card topic-art__creative-card--large"><span>CAMPAIGN / 04</span><b>Make the<br />moment matter.</b><i /></div><div className="topic-art__creative-card topic-art__creative-card--small"><span>CLIENT NOTE</span><b>Approved with<br />a few refinements</b><i /></div><div className="topic-art__creative-sticker">IN<br />PROGRESS</div></div>
  }
  if (page.design === 'service') {
    return <div className="topic-art__service-list"><div className="topic-art__service-row topic-art__service-row--active"><i /><span><b>Customer request received</b><small>Account history reviewed</small></span><em>9:12</em></div><div className="topic-art__service-row"><i /><span><b>Assigned to a service owner</b><small>Next action scheduled</small></span><em>9:18</em></div><div className="topic-art__service-row"><i /><span><b>Follow-up ready to send</b><small>Customer update prepared</small></span><em>Today</em></div><div className="topic-art__service-status"><span /> Clear owner <span /> Next action set</div></div>
  }
  return <>
    <div className="topic-art__summary">
      <div><span>Relationship</span><strong>Active</strong></div>
      <div><span>Owner</span><strong>BluePeak team</strong></div>
      <div><span>Next step</span><strong>Review together</strong></div>
    </div>
    <div className="topic-art__activity">
      <span className="topic-art__activity-title">Recent activity</span>
      <div className="topic-art__activity-row"><i /><span><b /><em /></span><small>Today</small></div>
      <div className="topic-art__activity-row"><i /><span><b /><em /></span><small>Yesterday</small></div>
      <div className="topic-art__activity-row"><i /><span><b /><em /></span><small>This week</small></div>
    </div>
  </>
}

function TopicIllustration({ page }) {
  return (
    <div className={`topic-art topic-art--${page.visual}`} aria-label={`Illustrative ${page.panelTitle} preview`}>
      <div className="topic-art__glow" />
      <div className="topic-art__panel">
        <div className="topic-art__topline">
          <span className="topic-art__brand-mark">B</span>
          <span className="topic-art__top-label">BLUEPEAK WORKSPACE</span>
          <span className="topic-art__menu-dots" aria-hidden="true">•••</span>
        </div>
        <div className="topic-art__heading">
          <div><span>{page.panelTag}</span><h2>{page.panelTitle}</h2></div>
          <span className="topic-art__avatar">BP</span>
        </div>
        <TopicGraphic page={page} />
      </div>
      <div className="topic-art__note"><span className="topic-art__note-icon"><ArrowRight size={16} /></span><div><b>{page.noteTitle}</b><small>{page.noteText}</small></div></div>
    </div>
  )
}

function TopicNotFound() {
  return (
    <div className="ip">
      <InnerHero
        compact
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Topic not found' }]}
        title="That topic is not in this preview."
        lead="Choose a page from the Platform or Solutions menu to keep exploring."
        actions={<Button to="/" variant="light">Back to BluePeak</Button>}
      />
    </div>
  )
}

export default function TopicPage({ section }) {
  const { slug } = useParams()
  const page = innerPages[`${section}/${slug}`]
  usePageMeta({
    title: page ? `${page.title} | BluePeak CRM Preview` : 'Topic not found | BluePeak CRM',
    description: page?.intro ?? 'Explore the BluePeak CRM preview.',
    path: `/${section}/${slug}`,
  })

  if (!page) return <TopicNotFound />
  const relatedPages = (page.related ?? []).map((key) => ({ key, page: innerPages[key] })).filter((item) => item.page)

  return (
    <div className={`ip ip--${page.design}`}>
      <InnerHero
        crumbs={[{ label: 'Home', to: '/' }, { label: page.type }, { label: page.title }]}
        title={page.headline}
        lead={page.intro}
        actions={
          <>
            <Button href={DEMO_HREF} variant="light">Request a preview</Button>
            <Link className="ip-textlink ip-textlink--light" to="/about">About BluePeak</Link>
          </>
        }
        note="Illustrative sample content for a fictional CRM concept."
        aside={<TopicIllustration page={page} />}
      />

      <Ledger
        id="topic-benefits-title"
        title={page.benefitTitle}
        lead={page.benefitLead}
        items={page.features.map(([title, text], index) => ({ icon: icons[index], title, text }))}
      />

      <Moments id="topic-scenarios-title" title={page.scenarioTitle} lead={page.scenarioLead} items={page.scenarios} />

      <Ascent id="topic-steps-title" title={page.stepsTitle} items={page.steps} />

      {relatedPages.length > 0 && (
        <LinkRows
          id="topic-related-title"
          title="Connected ideas for your team."
          lead="Explore another part of the BluePeak preview."
          items={relatedPages.map(({ key, page: related }) => ({ to: `/${key}`, kind: related.type, title: related.title, text: related.intro }))}
        />
      )}

      <CTASection
        eyebrow={`Explore ${page.type.toLowerCase()}`}
        title={page.ctaTitle}
        text={page.ctaText}
        cta="Request a CRM preview"
      />
    </div>
  )
}
