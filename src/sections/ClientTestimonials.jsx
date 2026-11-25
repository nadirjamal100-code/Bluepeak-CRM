import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data/site'
import { OrganizationLogoSlider } from './TrustStrip'

const integerFormatter = new Intl.NumberFormat('en-US')
const compactFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 0,
})

function AnimatedCounter({ value, suffix = '', compact = false }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const formatter = compact ? compactFormatter : integerFormatter

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setCount(value)
      return
    }

    let frame = 0
    let startTime
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        observer.disconnect()
        const animate = (time) => {
          if (startTime === undefined) startTime = time
          const progress = Math.min((time - startTime) / 1200, 1)
          const easedProgress = 1 - (1 - progress) ** 3
          setCount(Math.floor(easedProgress * value))
          if (progress < 1) {
            frame = requestAnimationFrame(animate)
          } else {
            setCount(value)
          }
        }
        frame = requestAnimationFrame(animate)
      },
      { threshold: 0.4 },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <strong ref={ref} aria-label={`${formatter.format(value)}${suffix}`}>
      <span className="testimonials__counter-value" aria-hidden="true">
        {formatter.format(count)}
        {suffix}
      </span>
    </strong>
  )
}

function TestimonialCards({ decorative = false }) {
  return (
    <ul className="testimonials__group" aria-hidden={decorative || undefined}>
      {testimonials.map((testimonial) => (
        <li
          className="testimonials__card"
          key={`${decorative ? 'copy-' : ''}${testimonial.organization}`}
        >
          <div className="testimonials__brand" aria-hidden="true">
            <span className="testimonials__brand-mark">{testimonial.initials[0]}</span>
            <span>{testimonial.organization}</span>
          </div>
          <blockquote className="testimonials__quote">
            <span className="testimonials__quote-mark" aria-hidden="true">
              “
            </span>
            <p>{testimonial.quote}</p>
          </blockquote>
          <footer className="testimonials__author">
            <span className="testimonials__avatar" aria-hidden="true">
              {testimonial.initials}
            </span>
            <span className="testimonials__author-details">
              <span className="testimonials__name">{testimonial.name}</span>
              <span className="testimonials__role">
                {testimonial.role} · {testimonial.organization}
              </span>
            </span>
          </footer>
        </li>
      ))}
    </ul>
  )
}

export function TestimonialOverview() {
  return (
    <section className="testimonials testimonials--overview" aria-label="Illustrative snapshot and World Bank logo">
      <div className="container testimonials__container">
        <div className="testimonials__overview">
          <aside className="testimonials__metrics" aria-label="Illustrative preview metrics">
            <p className="testimonials__metrics-eyebrow">Preview snapshot</p>
            <p className="testimonials__metrics-intro">A clearer view of customer context.</p>
            <ul className="testimonials__stats">
              <li>
                <AnimatedCounter value={205} />
                <span className="testimonials__stats-label">sample customer records</span>
              </li>
              <li>
                <AnimatedCounter value={70} suffix="+" />
                <span className="testimonials__stats-label">sample workflow templates</span>
              </li>
              <li>
                <AnimatedCounter value={18000} suffix="+" compact />
                <span className="testimonials__stats-label">example customer interactions</span>
              </li>
              <li>
                <AnimatedCounter value={2200} suffix="+" />
                <span className="testimonials__stats-label">illustrative follow-up activities</span>
              </li>
            </ul>
          </aside>
          <aside className="testimonials__organizations" aria-labelledby="trust-title">
            <div className="testimonials__organizations-heading">
              <h2 className="trust__logos-heading" id="trust-title">
                A global perspective
              </h2>
              <p>Brand marks shown for visual reference</p>
            </div>
            <OrganizationLogoSlider />
          </aside>
        </div>
      </div>
    </section>
  )
}

export default function ClientTestimonials() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container testimonials__container">
        <div className="testimonials__main">
          <div className="testimonials__heading">
            <SectionHeading
              id="testimonials-title"
              eyebrow="Illustrative customer stories"
              title="Better conversations start with shared context."
              intro="Sample stories show how connected customer details and next steps can support team workflows."
            />
            <button
              className="testimonials__toggle"
              type="button"
              aria-pressed={isPaused}
              onClick={() => setIsPaused((paused) => !paused)}
            >
              {isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            </button>
          </div>
          <div className="testimonials__viewport" role="region" aria-label="Illustrative testimonials">
            <div className={`testimonials__track${isPaused ? ' is-paused' : ''}`}>
              <TestimonialCards />
              <TestimonialCards decorative />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
