import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CustomerContextVisual from './CustomerContextVisual'
import { sampleAccounts } from '../data/site'

export default function Mission({ showAccounts = true }) {
  return (
    <section className="section mission-section" aria-labelledby="mission-title">
      <div className="container mission__container">
        <Reveal className="mission__heading">
          <SectionHeading
            id="mission-title"
            eyebrow="Customer context"
            align="center"
            title="Bring every customer detail into focus."
            intro="A CRM concept for keeping relationship history, open opportunities, and the next action close at hand."
          />
        </Reveal>
        <div className="mission__content">
          <Reveal className="mission__visual">
            <CustomerContextVisual />
          </Reveal>
          <Reveal delay={80} className="prose mission__copy">
            <h3>Give every customer conversation a clear next step.</h3>
            <p>
              The BluePeak CRM preview brings sample account notes, interaction history, and follow-up tasks into one
              illustrative workflow for sales and service teams.
            </p>
            <p>
              All records and capabilities shown are fictional placeholders. Replace them with verified product details
              and outcomes before publishing.
            </p>
            {showAccounts && (
              <>
                <p className="prose__label">Example CRM accounts</p>
                <ul className="chips">
                  {sampleAccounts.map((c) => (
                    <li key={c} className="chip">
                      {c}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
