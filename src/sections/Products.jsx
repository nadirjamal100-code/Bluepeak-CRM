import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { products } from '../data/site'

export default function Products() {
  return (
    <section id="products" className="section products-section on-dark" aria-labelledby="products-title">
      <div className="container products__container">
        <Reveal className="products__heading">
          <SectionHeading
            id="products-title"
            eyebrow="The CRM platform"
            align="center"
            title={
              <>
                Products that <span className="products__title-accent">power growth</span>
              </>
            }
            intro="From first conversation to lasting customer relationships."
          />
        </Reveal>
        <div className="products__stage">
          <div className="products__fan" aria-label="Illustrative BluePeak CRM workflows">
            {products.map((p, i) => (
              <Reveal
                key={p.id}
                className={`products__item products__item--${i + 1}`}
                delay={i * 60}
              >
                <ServiceCard
                  icon={p.icon}
                  title={p.name}
                  text={p.text}
                  className="product-card"
                  tabIndex={0}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <div className="products__curve" aria-hidden="true" />
      <div className="products__bottom-copy">
        <span className="products__mark" aria-hidden="true">
          CRM
        </span>
        <div className="products__bottom-message">
          <h2>Built for every conversation.</h2>
          <p>Customer records, follow-ups, and insights stay connected.</p>
        </div>
      </div>
    </section>
  )
}
