import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to #hash targets or to top on navigation, and moves focus to <main> on route change. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  const first = useRef(true)

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
    if (!first.current) document.getElementById('main')?.focus({ preventScroll: true })
    first.current = false
  }, [pathname, hash])

  return null
}
