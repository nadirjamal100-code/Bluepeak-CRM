import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { Bot } from '../components/Icons'
import { DEMO_HREF } from '../data/site'

export default function CRMAssistant() {
  return (
    <section id="crm-assistant" className="section" aria-labelledby="crm-assistant-title">
      <div className="container">
        <Reveal className="feature">
          <div className="feature__icon">
            <Bot size={32} />
          </div>
          <div className="feature__body">
            <p className="eyebrow">CRM assistant concept</p>
            <h2 id="crm-assistant-title">Turn customer context into a useful next step.</h2>
            <p>
              This illustrative concept summarizes a customer conversation and drafts a follow-up task. It is sample
              content, not a live assistant or a claim about an available AI feature.
            </p>
            <Button href={DEMO_HREF} variant="outline">
              Ask about the CRM preview
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
