import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Accordion from '../components/Accordion'
import Button from '../components/Button'
import { faqs } from '../data/site'

export default function FAQSection({ showAllLink = true }) {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeading
            id="faq-title"
            align="center"
            eyebrow="CRM preview guide"
            title="Questions about the CRM preview."
            intro="Learn what this illustrative product site shows and which details are placeholders."
          />
        </Reveal>
        <Accordion items={faqs} />
        {showAllLink && (
          <div className="center">
            <Button to="/faq" variant="outline">
              View all CRM FAQs
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
