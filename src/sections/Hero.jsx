import Button from '../components/Button'
import HeroVisual from './HeroVisual'
import { DEMO_HREF } from '../data/site'

export default function Hero() {
  return (
    <section className="hero on-dark" aria-labelledby="hero-title">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/media/crm-team-poster.jpg"
        aria-hidden="true"
        tabIndex="-1"
      >
        <source src="/media/crm-team.mp4" type="video/mp4" />
      </video>
      <svg className="hero__ridge" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path className="hero__ridge-fill" d="M0 96 L150 62 L260 90 L430 28 L560 72 L720 18 L890 84 L1050 40 L1190 78 L1320 46 L1440 70 L1440 120 L0 120 Z" />
        <path className="hero__ridge-line" d="M0 96 L150 62 L260 90 L430 28 L560 72 L720 18 L890 84 L1050 40 L1190 78 L1320 46 L1440 70" pathLength="1" />
      </svg>
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--dark">BluePeak CRM · sample preview</p>
          <h1 id="hero-title">
            Every customer relationship, <span className="hero__accent">clear at a glance.</span>
          </h1>
          <p className="hero__lead">
            Bring contact details, sales opportunities, follow-up tasks, and recent activity into one illustrative CRM
            workspace. Everything shown here is sample content.
          </p>
          <div className="hero__actions">
            <Button href={DEMO_HREF} variant="light">
              Request a CRM preview
            </Button>
            <Button to="/#products" variant="ghost">
              Explore the platform
            </Button>
          </div>
        </div>
        <div className="hero__visual">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
