import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Site-wide motion layer (styles live in src/styles/motion.css).
 *  - Scroll reveal: marks matching elements with [data-m] and adds `.is-in` when they enter the viewport.
 *    New elements (filters, lazy pages) are picked up automatically.
 *  - Page fade on route change.
 *  - A thin scroll-progress bar.
 * Everything except the progress bar is skipped when the visitor prefers reduced motion.
 */

const TARGETS = [
  '.ip-head',
  '.ip-row',
  '.ip-moment',
  '.ip-step',
  '.ip-linkrow',
  '.ip-next__links a',
  '.ip-filters',
  '.blog-card',
  '.pm',
].join(',')

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function MotionManager() {
  const { pathname } = useLocation()
  const barRef = useRef(null)

  // Scroll reveal
  useLayoutEffect(() => {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined

    const root = document.documentElement
    root.classList.add('js-motion')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0.05 },
    )

    const seen = new WeakSet()
    const scan = () => {
      document.querySelectorAll(TARGETS).forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        const siblings = Array.from(el.parentElement?.children ?? []).filter((child) => child.matches(TARGETS))
        el.style.setProperty('--i', String(Math.min(siblings.indexOf(el), 6)))
        el.setAttribute('data-m', '')
        observer.observe(el)
      })
    }

    scan()
    const mutations = new MutationObserver(scan)
    mutations.observe(document.getElementById('root') ?? document.body, { childList: true, subtree: true })

    return () => {
      mutations.disconnect()
      observer.disconnect()
      root.classList.remove('js-motion')
      document.querySelectorAll('[data-m]').forEach((el) => el.removeAttribute('data-m'))
    }
  }, [])

  // Soft fade-in on route change
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined
    const main = document.getElementById('main')
    if (!main) return undefined
    main.classList.remove('page-enter')
    void main.offsetWidth // restart the animation
    main.classList.add('page-enter')
    const timer = setTimeout(() => main.classList.remove('page-enter'), 700)
    return () => clearTimeout(timer)
  }, [pathname])

  // Scroll progress
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [pathname])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={barRef} />
    </div>
  )
}
